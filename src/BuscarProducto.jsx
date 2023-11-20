import React, { useState, useEffect } from 'react';
import Paginacion from './Paginacion';
import Filtro from './Filtro';

function BuscarProductos() {
  const [buscar, setBuscar] = useState('');
  const [resultados, setResultados] = useState([]);
  const [totalPagina, setPaginaTotal] = useState([]);
  const [pagina, setPagina] = useState(1);
  const resultadosPorPagina = 50;
  const [productosFiltrados, setProductosFiltrados] = useState(resultados);


  const fetchResultados = () => {
    const offset = (pagina - 1) * resultadosPorPagina;
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${buscar}&sort=price_asc&offset=${offset}`;

  
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ "APP_USR-7650143381075360-111511-c1949fe019e21816969c706da923d8d2-65494552"}`,
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

  useEffect(() => {
    setProductosFiltrados(resultados);
  }, [resultados]);

  const handleFilterChange = (nuevosFiltros) => {
    // Actualizamos el estado con los nuevos filtros
    setProductosFiltrados(
      resultados.filter(producto => {
        return (
          (nuevosFiltros.category === "all" || producto.category_id === nuevosFiltros.category) &&
          (nuevosFiltros.minPrice <= producto.price) &&
          (nuevosFiltros.catalogo === "all" || nuevosFiltros.catalogo === producto.catalog_listing.toString()) &&
          (nuevosFiltros.ventas <= producto.sold_quantity)
        );
      })
    );
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
      <div className='contenedorTablaPrincipal'>
      <Filtro onFilterChange={handleFilterChange} />
      <table className='tableprincipal'>
        <thead>
          <tr>
          <th className="text-center">IMAGEN</th>
            <th className="text-center">CATEGORIA</th>
            <th className="text-center">Condicion / envio</th>
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
          {productosFiltrados.map((producto) => (
            <tr key={producto.id}>
              <td><img src={producto.thumbnail}></img> </td>
              <td>{producto.category_id}{producto.domain_id}{producto.catalog_product_id}</td> 
              <td>{producto.condition} / {producto.shipping.logistic_type}{producto.shipping.free_shipping}</td>
              <td>{producto.seller.seller_reputation.power_seller_status}</td>
              <td>{producto.title}</td>
              <td>$ {producto.price}</td>
              <td><a href={producto.permalink} target="_blank" rel="noopener noreferrer">Link</a></td>
              <td>{producto.available_quantity}</td>
              <td>{producto.listing_type_id}</td> 
              <td>{producto.catalog_listing ? "SI" : "NO"}
              {/* <Catalogo catalogProductId={producto.catalog_product_id} /> */}
              </td>
              <td>{producto.sold_quantity}</td>
             </tr>
          ))}
        </tbody>
      </table>
      </div>
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
