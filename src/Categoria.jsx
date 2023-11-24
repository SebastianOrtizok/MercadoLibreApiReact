import { useState, useEffect } from 'react';

let access_token =  localStorage.getItem('accessToken');
// let access_token="APP_USR-7650143381075360-112319-cb704e2d33cb4efa126cb8fd6e8ebb36-65494552"

function Categoria() {
  const [datosCategoria, setDatosCategoria] = useState({ results: [], available_filters: [], paging: {} });

  useEffect(() => {
    const fetchResultados = async () => {
      const url = `https://api.mercadolibre.com/sites/MLA/search?category=MLA1055`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const data = await response.json();
        setDatosCategoria({
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
  console.log(datosCategoria);

  return (
    <>
      <div className='contenedorTablaPrincipal'>
      <div className='categorias'>
        <table>
          <thead>
            <tr>
              <th>
                <h2>{datosCategoria.filters?.[0]?.values?.[0]?.name}</h2>
              </th>
              <th><h2>{datosCategoria.paging?.total}</h2></th>
            </tr>
          </thead>
          <tbody>
              {datosCategoria.available_filters[0]?.values.map((datos) => (
           <tr key={datos.index}>
  <td  >{datos.name}</td>
   <td>{datos.results}</td>

              </tr>
))}
{datosCategoria.available_filters[2]?.values.map((datos) => (
           <tr key={datos.index}>
  <td  >{datos.name}</td>
   <td>{datos.results}</td>

              </tr>
))}

          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>
                <h2>Localidad</h2>
              </th>
              <th><h2>Cantidad</h2></th>
            </tr>
          </thead>
          <tbody>
              {datosCategoria.available_filters[19]?.values.map((datos) => (
           <tr key={datos.index}>
  <td  >{datos.name}</td>
   <td>{datos.results}</td>

              </tr>
))}
{datosCategoria.available_filters[2]?.values.map((datos) => (
           <tr key={datos.index}>
  <td  >{datos.name}</td>
   <td>{datos.results}</td>

              </tr>
))}

          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>
                <h2>Producto</h2>
              </th>
              <th><h3>Cantidad</h3></th>
              <th><h3>Precio</h3></th>
              <th><h3>Vendedor</h3></th>
              <th><h3>Vendidas</h3></th>
              <th><h3>Link</h3></th>
            </tr>
          </thead>
          <tbody>
          {datosCategoria.results.map((datos) => (
           <tr key={datos.index}>
           <td  >{datos.title}</td>
  <td  > {datos.available_quantity}</td>
   <td> {datos.price}</td>
   <td> {datos.seller.nickname}</td>
   <td> {datos.sold_quantity}</td>
   <td>   <a href={datos.permalink} target="_blank" rel="noopener noreferrer">Link</a> </td>
              </tr>
))}
          </tbody>
          </table>

          <table>
          <thead>
            <tr>
              <th>
                <h2>Marca</h2>
              </th>
              <th><h3>Cantidad</h3></th>
            </tr>
          </thead>
          <tbody>
          {datosCategoria.available_filters[15]?.values.map((datos) => (
           <tr key={datos.index}>
           <td  >{datos.name}</td>
  <td  > {datos.results}</td>
      </tr>
))}
          </tbody>
          </table>
          </div>
          
      </div>
    </>
  );
}

export default Categoria;
