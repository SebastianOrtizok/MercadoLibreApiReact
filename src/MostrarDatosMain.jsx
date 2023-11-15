import { useState , useEffect } from 'react';
import ExportToExcel from './ExportToExcel';
import DolarHoy from './DolarHoy';
import Filtro from './Filtro';

function MostrarDatosMain(props) {
  const { productos } = props;
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  useEffect(() => {
    setProductosFiltrados(productos);
  }, [productos]);

  // Función para manejar los cambios en los filtros
  const handleFilterChange = (nuevosFiltros) => {
    // Actualizamos el estado con los nuevos filtros
    setProductosFiltrados(
      productos.filter(producto => {
        return (
          (nuevosFiltros.category === "all" || producto.category_id === nuevosFiltros.category) &&
          (nuevosFiltros.minPrice <= producto.price) &&
          (nuevosFiltros.catalogo === "all" || nuevosFiltros.catalogo === producto.catalog_listing.toString()) &&
          (nuevosFiltros.ventas <= producto.sold_quantity)
        );
      })
    );
  };


let i=0
  return (
    <>
      <div className='contenedorPrincipal'>
        {/* Contenido de la tabla 1 */}
        <table className='tableVendedor'>
          <thead>
            <tr>
              <th className="text-center">Eshop</th>
              <th className="text-center">Dirección</th>
              <th className="text-center">Localidad</th>
              <th className="text-center">Eshop <p>experiencia</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img style={{ width: '50%', height: 'auto' }} src={productos[0]?.seller?.eshop?.eshop_logo_url} /></td>
              <td>{productos[0]?.seller_address?.city?.name}</td>
              <td>{productos[0]?.seller_address?.state?.name}</td>
              <td>{productos[0]?.seller?.eshop?.eshop_experience}</td>
            </tr>
          </tbody>
        </table>

        {/* Contenido de la tabla 2 */}
        <table className='tableVendedor2'>
          <thead>
            <tr>
              <th className="text-center">Vendedor</th>
              <th className="text-center">Ventas</th>
              <th className="text-center">Cancelaciones</th>
              <th className="text-center">Reclamos</th>
              <th className="text-center">Cancelaciones<p>históricas</p></th>
              <th className="text-center">Ventas <p>históricas</p></th>
              <th className="text-center">Calidad <p>de vendedor</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
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

        <div className='contenedorTablaPrincipal'>
          {/* Contenido de la tabla principal */}
          <Filtro onFilterChange={handleFilterChange} />
          <table>
            <thead>

              <tr>
                <th className="text-center">IMAGEN</th>
                <th className="text-center titulo">TITULO</th>
                <th className="text-center"><p>CATEGORIA</p></th>
                <th className="text-center">PUBLICACION</th>
                <th className="text-center">ENVIO</th>
                <th className="text-center">TIPO <p>PUBLICACION</p></th>
                <th className="text-center">PRECIO</th>
                <th className="text-center">LINK</th>
                <th className="text-center">STOCK</th>
                <th className="text-center"><p>CATALOGO</p></th>
                <th className="text-center">VENDIDOS</th>
                {/* ... (otros encabezados) ... */}
              </tr>
            </thead>

            <tbody>
              {productosFiltrados.map(producto => (
                <tr key={producto.id}>
                <td><img src={producto.thumbnail} alt="Producto" />{i=i+1}</td>
      <td>{producto.title}</td>
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
        {/* <Catalogo catalogProductId={producto.catalog_product_id} /> */}
        <p>{producto.catalog_product_id}</p>
      </td>
      <td>{producto.sold_quantity}</td>
    </tr>
  ))}
</tbody>
      </table>
      </div>
      </div>
    </>
  );
}

export default MostrarDatosMain;

