import React from 'react';

function MostrarDatosMain(props) {
  const { productos } = props;

  return (
    <div>
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

            {/* Agrega más encabezados de columna según tus necesidades */}
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td><img src={producto.thumbnail}></img> </td>
              <td>{producto.category_id}</td>
              <td>{producto.domain_id}</td> 
              <td>{producto.catalog_product_id}</td>
            <td>{producto.shipping.logistic_type}{producto.shipping.free_shipping}</td>
              <td>{producto.seller.seller_reputation.power_seller_status}</td>
              <td>{producto.title}</td>
              <td>{producto.price}</td>
              <td>{producto.permalink}</td>
              <td>{producto.available_quantity}</td>
              <td>{producto.sold_quantity}</td> 
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MostrarDatosMain;
