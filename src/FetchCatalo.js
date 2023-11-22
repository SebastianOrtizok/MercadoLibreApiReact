//** Funciona pero el servidor te bloquea por tantas solicitudes */

export const FetchCatalogo = async () => {
    const limit = 50;
    let offset = 0;
    let allResults = [];
    let loop=false
  
    try {
      while (loop == true) {
        const url = `https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&offset=${offset}&limit=${limit}`;
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`Error al realizar la solicitud: ${response.statusText}`);
        }
  
        const data = await response.json();

        console.log("datos de los 2100 prodctos" + data)
  
        if (data.results.length === 0 || offset >= data.paging.total) {
            loop=false
          // No hay más resultados o hemos alcanzado el total, salimos del bucle
          break;
        }
  
        // Agregamos los resultados actuales al array
        allResults = allResults.concat(data.results);
  
        // Incrementamos el offset para la próxima solicitud
        offset += limit;
      }
  
      console.log('Todos los resultados:', allResults);
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  };
  
  FetchCatalogo();
  