import React, { useState } from 'react';
import ExportToExcel from './ExportToExcel';
import DolarHoy from './DolarHoy';

function MostrarDatosMain(props) {
  const { productos } = props;
  const [filtroActivo, setFiltroActivo] = useState(false); // Estado para controlar el filtro
  const [categoriaFiltrada, setCategoriaFiltrada] = useState(null); // Estado para la categoría filtrada

  // Aplicar el filtro al conjunto de productos
  const productosFiltrados = filtroActivo
    ? productos.filter((producto) => producto.category_id === categoriaFiltrada)
    : productos;

  // Función para cambiar el estado del filtro
  const aplicarFiltro = (categoria) => {
    if (filtroActivo && categoria === categoriaFiltrada) {
      console.log("Aplicando filtro", categoria);
      console.log("Filtro activo:", filtroActivo);
      console.log("Categoría filtrada:", categoriaFiltrada);

      // Si el filtro ya está activo y se hace clic en la misma categoría, quitar el filtro
      setFiltroActivo(false);
      setCategoriaFiltrada(null);
    } else {
      // Aplicar el filtro para mostrar solo productos de la categoría seleccionada
      setFiltroActivo(true);
      setCategoriaFiltrada(categoria);
    }
  };


  return (
    <>
  <div className='contenedorPrincipal'>
  <table>
    <thead>
      <tr>
        <th className="text-center">Eshop</th>
        <th className="text-center">Dirección</th>
        <th className="text-center">Localidad</th>
        <th className="text-center">Eshop experiencia</th>
      </tr>
    </thead>
    <tbody>

        <tr >
        <td><img style={{ width: '50%', height: 'auto' }} src={productos[0]?.seller?.eshop?.eshop_logo_url} /></td>
        <td>{productos[0]?.seller_address?.city?.name}</td>
        <td>{productos[0]?.seller_address?.state?.name}</td>
        <td>{productos[0]?.seller?.eshop?.eshop_experience}</td>
      </tr>
    </tbody>
  </table>
    <table>
    <thead>
      <tr>
        <th className="text-center">Vendedor</th>
        <th className="text-center">Ventas</th>
        <th className="text-center">Cancelaciones</th>
        <th className="text-center">Reclamos</th>
        <th className="text-center">Cancelaciones históricas</th>
        <th className="text-center">Ventas históricas</th>
        <th className="text-center">Calidad de vendedor</th>
      </tr>
    </thead>
    <tbody>

        <tr >
        <td>{productos[0]?.seller?.nickname}</td>
        <td>{productos[0]?.seller?.seller_reputation?.metrics?.sales?.completed}</td>
        <td>{productos[0]?.seller?.seller_reputation?.metrics?.cancellations?.value}</td>
        <td>{productos[0]?.seller?.seller_reputation?.metrics?.claims?.value}
        <p>Rate {productos[0]?.seller?.seller_reputation?.metrics?.claims?.rate}</p>
        </td>
        <td>{productos[0]?.seller?.seller_reputation?.transactions?.canceled}</td>
        <td>{productos[0]?.seller?.seller_reputation?.transactions?.completed}</td>
        <td>{productos[0]?.seller?.seller_reputation?.power_seller_status}</td>
      </tr>

    </tbody>
  </table>
  <DolarHoy />
</div>
  <div>
  <button>
  <ExportToExcel productos={productos} />
  </button>
    <table>
        <thead>
          <tr>
          <th className="text-center">IMAGEN</th>
            <th className="text-center">CATEGORIA</th>
            <th className="text-center">PUBLICACION</th>
            <th className="text-center">ENVIO</th>
            <th className="text-center">TIPO PUBLICACION</th>
            <th className="text-center">TITULO</th>
            <th className="text-center">PRECIO</th>
            <th className="text-center">LINK</th>
            <th className="text-center">STOCK</th>
            <th className="text-center">CATALOGO</th>
            <th className="text-center">VENDIDOS</th>
          </tr>
        </thead>
        <tbody>
        {productosFiltrados.map((producto) => (
            <tr key={producto.id}>
              <td><img src={producto.thumbnail}></img> </td>
              <td>
              <button onClick={() => aplicarFiltro(producto.category_id)}>
                  {filtroActivo && categoriaFiltrada === producto.category_id
                    ? 'Quitar Filtro'
                    : 'Filtrar Categoría'}{' '}
                  {producto.category_id}
                </button>
         {producto.category_id}{producto.domain_id.substring(4, 18)}
              </td> 
              <td>{producto.catalog_product_id}
              <p>{producto.condition}</p></td>
            <td>{producto.shipping.logistic_type}{producto.shipping.free_shipping}</td>
              <td>{producto.listing_type_id}</td> 
              
              <td>{producto.title}</td>
              <td>$ {producto.price}</td>
              <td><a href={producto.permalink} target="_blank" rel="noopener noreferrer">Link</a></td>
              <td>{producto.available_quantity}</td>
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
      </div>
      </>
  );
}

export default MostrarDatosMain;
