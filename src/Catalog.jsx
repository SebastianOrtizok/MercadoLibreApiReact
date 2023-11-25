import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// let access_token =  localStorage.getItem('accessToken');
let access_token="APP_USR-7650143381075360-112512-07817d42960317f28de537cf692b0585-65494552"


function Catalog() {
  const location = useLocation();
  // Obtener el objeto URLSearchParams para obtener parámetros de la URL
  const searchParams = new URLSearchParams(location.search);
  // Obtener el valor del parámetro 'titulo'
  const titulo = searchParams.get('titulo');
  const [datosCatalog, setDatosCatalog] = useState();

  useEffect(() => {
    const fetchResultados = async () => {
      const url = `https://api.mercadolibre.com/sites/MLA/search?q=${titulo}`;
console.log(url)
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
  }, [titulo]);

  // Verificar si las propiedades existen antes de acceder a ellas
  console.log(datosCatalog?.results);

  return (
    <>
 {/* <button>
          <ExportToExcel productos={productos} />
        </button> */}

        <div className='contenedorTablaPrincipal'>

          <table className='tableprincipal'>
            <thead>

              <tr>
                <th className="text-center">IMAGEN</th>
                <th className="text-center titulo">TITULO</th>
                <th className="text-center titulo">VENDEDOR</th>
                <th className="text-center"><p>CATEGORIA</p></th>
                <th className="text-center">PUBLICACION</th>
                <th className="text-center">ENVIO</th>
                <th className="text-center">TIPO <p>PUBLICACION</p></th>
                <th className="text-center">PRECIO</th>
                <th className="text-center">LINK</th>
                <th className="text-center">STOCK</th>
                <th className="text-center"><p>CATALOGO</p></th>
                <th className="text-center">VENDIDOS</th>
              </tr>
            </thead>

            <tbody>
            {datosCatalog?.results.map(producto => (
                <tr key={producto.id}>
                <td><img src={producto.thumbnail} alt="Producto" width={100} /></td>
      <td>{producto.title}</td>
      <td><p><strong>{producto.seller.nickname.slice(0,15)}</strong></p></td>
     <td>
        {producto.category_id} <p>{producto.domain_id.slice(4,20)}</p>
      </td>
      <td>{producto.catalog_product_id}
        <p>{producto.condition}</p>
      </td>
     <td>{producto.shipping.logistic_type}{producto.shipping.free_shipping}</td> 
      <td>{producto.listing_type_id}</td>
      <td>$ {producto.price}</td>
      <td><a href={producto.permalink} target="_blank" rel="noopener noreferrer">Link</a></td>
      <td>{producto.available_quantity}</td>
      <td>{producto.catalog_listing ? "EN CATALOGO" : "SIN CATALOGO"}
        <p>{producto.catalog_product_id}</p>
      </td>
      <td>{producto.sold_quantity}</td>
    </tr>
  ))}
</tbody>
      </table>
  </div>
  </>
  );
}

export default Catalog;
