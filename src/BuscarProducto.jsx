import React, { useState, useEffect } from 'react';
import Paginacion from './Paginacion';

function BuscarProductos(accessToken) {
  const [buscar, setBuscar] = useState('');
  const [resultados, setResultados] = useState([]);
  const [totalPagina, setPaginaTotal] = useState([]);
  const [pagina, setPagina] = useState(1);
  const resultadosPorPagina = 50;


  const fetchResultados = () => {
    const offset = (pagina - 1) * resultadosPorPagina;
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${buscar}&sort=price_asc&offset=${offset}`;
    console.log(url);
  
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPaginaTotal(data.paging.total);
        setResultados(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener información de la búsqueda:', error);
      });
  };
  

  useEffect(() => {
    fetchResultados();
  }, [pagina]);

  const handleBuscar = () => {
    // setPagina(1); // Resetear la página al buscar nuevamente.
    fetchResultados();
  };

  const cambiarPagina = (nuevaPagina) => {
    setPagina(nuevaPagina);
    console.log( resultados )
  };

  return (
    <div className='BuscarProductos'>
      <input className='BuscarProductos_input'
        type="text"
        placeholder="Ingrese su búsqueda"
        value={buscar}
        onChange={e => setBuscar(e.target.value)}
      />
      <button onClick={handleBuscar}>Buscar</button>

      <table>
        <thead>
          <tr>
          <th className="text-center">IMAGEN</th>
          <th className="text-center">CAT ID</th>
            <th className="text-center">CATEGORIA</th>
            <th className="text-center">PUBLICACION</th>
            <th className="text-center">ENVIO</th>
            <th className="text-center">CALIDAD</th>
            <th className="text-center">TITULO</th>
            <th className="text-center">PRECIO</th>
            <th className="text-center">LINK</th>
            <th className="text-center">STOCK</th>
            <th className="text-center">TIPO</th>
            <th className="text-center">CATALOGO</th>
            <th className="text-center">VENDIDOS</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((producto) => (
            <tr key={producto.id}>
              <td><img src={producto.thumbnail}></img> </td>
              <td>{producto.category_id}</td>
              <td>{producto.domain_id}</td> 
              <td>{producto.catalog_product_id}
              <p>{producto.condition}</p></td>
            <td>{producto.shipping.logistic_type}{producto.shipping.free_shipping}</td>
              <td>{producto.seller.seller_reputation.power_seller_status}</td>
              <td>{producto.title}</td>
              <td>$ {producto.price}</td>
              <td><a href={producto.permalink} target="_blank" rel="noopener noreferrer">Link</a></td>
              <td>{producto.available_quantity}</td>
              <td>{producto.listing_type_id}</td> 
              <td>{producto.catalog_listing ? "EN CATALOGO" : "SIN CATALOGO"}
              <p>{producto.winner_item_id ? "GANANDO" : "PERDIENDO"}</p>
              {/* <Catalogo catalogProductId={producto.catalog_product_id} /> */}
              <p>{producto.catalog_product_id}</p>

              </td>
              <td>{producto.sold_quantity}</td>
             </tr>
          ))}
        </tbody>
      </table>
      <Paginacion
        totalResultados={totalPagina}
        resultadosPorPagina={resultadosPorPagina}
        paginaActual={pagina}
        cambiarPagina={cambiarPagina}
      />
    </div>
  );
}

export default BuscarProductos;
