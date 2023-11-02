import React from 'react';
import ExportToExcel from "./ExportToExcel";
// import Catalogo from './Catalogo';


function MostrarDatosMain(props) {
  const { productos } = props;
console.log(productos[0])
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
</div>
  <div>
  <button>
  <ExportToExcel productos={productos} />
  </button>
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
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td><img src={producto.thumbnail}></img> </td>
              <td>{producto.category_id}</td>
              <td>{producto.domain_id.substring(0, 15)}</td> 
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
      </div>
      </>
  );
}

export default MostrarDatosMain;
