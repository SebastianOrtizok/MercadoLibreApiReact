import { useState, useEffect } from 'react';

let access_token =  localStorage.getItem('accessToken');


function Catalog() {
  const [datosCatalog, setDatosCatalog] = useState();

  useEffect(() => {
    const fetchResultados = async () => {
      const url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=185702920&category=$MLA1055`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const data = await response.json();
        setDatosCatalog({
          ...data,
          loading: false,
        });

      } catch (error) {
        console.error('Error al obtener información de la búsqueda:', error);
      }
    };


    // Llama a la función al montar el componente
    fetchResultados();
  }, []);

  // Verificar si las propiedades existen antes de acceder a ellas
  console.log(datosCatalog);

  return (
    <>

    </>
  );
}

export default Catalog;
