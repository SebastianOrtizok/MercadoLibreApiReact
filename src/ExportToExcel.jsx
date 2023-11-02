import React from 'react';
import { writeFile, utils } from 'xlsx';

function ExportToExcel({ productos }) {
  const exportToExcel = () => {
    const data = productos.map((producto) => ({
      IMAGEN: producto.thumbnail,
      'CAT ID': producto.category_id,
      CATEGORIA: producto.domain_id,
      PUBLICACION: producto.catalog_product_id,
      ENVIO: `${producto.shipping.logistic_type} ${producto.shipping.free_shipping}`,
      CALIDAD: producto.seller.seller_reputation.power_seller_status,
      TITULO: producto.title,
      PRECIO: producto.price,
      LINK: producto.permalink,
      STOCK: producto.available_quantity,
      TIPO: producto.sold_quantity,
    }));

    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Productos');

    writeFile(wb, 'productos.xlsx', { bookType: 'xlsx', type: 'blob' });
  };

  return (
    <a href="#" download="productos.xlsx" onClick={exportToExcel}>
      Exportar a Excel
    </a>
  );
}

export default ExportToExcel;
