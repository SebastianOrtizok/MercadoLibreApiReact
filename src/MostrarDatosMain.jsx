import { useState } from 'react';
import ExportToExcel from './ExportToExcel';
import DolarHoy from './DolarHoy';

function MostrarDatosMain(props) {
const { productos } = props;
const [filtro, setFiltro] = useState({
  category: "all",
  minPrice: 0,
  catalogo: "all",
  ventas: 0
});

console.log(productos)
const handelChangeMinPrice = (event) => {
  const minPrice = event.target.value;
  setFiltro({
    ...filtro,
    minPrice: minPrice
  });
};

  const handelChangeVendidos = (event) => {
    const ventasHechas = event.target.value;
    setFiltro({
      ...filtro,
      ventas: ventasHechas
    });
};

const filtrarCategoria = (event) => {
  const filtroCategoria = event.target.value;
  setFiltro({
    ...filtro,
    category: filtroCategoria
  })
}

const filtrarCatalogo = (event) => {
  const filtroEnCatalogo = event.target.value
  setFiltro ({
    ...filtro,
    catalogo: filtroEnCatalogo
  })
}



const productoFiltrado = productos.filter(producto => {
  return (filtro.category === "all" || producto.category_id === filtro.category) &&
         (filtro.minPrice <= producto.price) &&  (filtro.catalogo === "all" || filtro.catalogo === producto.catalog_listing.toString()) && (filtro.ventas<=producto.sold_quantity);

         
});

 let i=0


  return (
<>
  <div className='contenedorPrincipal'>
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

        <tr >
        <td><img style={{ width: '50%', height: 'auto' }} src={productos[0]?.seller?.eshop?.eshop_logo_url} /></td>
        <td>{productos[0]?.seller_address?.city?.name}</td>
        <td>{productos[0]?.seller_address?.state?.name}</td>
        <td>{productos[0]?.seller?.eshop?.eshop_experience}</td>
      </tr>
    </tbody>
  </table>
    <table className='tableVendedor2'>
    <thead>
      <tr>
        <th className="text-center">Vendedor</th>
        <th className="text-center">Ventas</th>
        <th className="text-center">Cancelaciones</th>
        <th className="text-center">Reclamos</th>
        <th className="text-center">Cancelaciones<p>históricas</p> </th>
        <th className="text-center">Ventas <p>históricas</p></th>
        <th className="text-center">Calidad <p>de vendedor</p></th>
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
  <div className='contenedorTablaPrincipal'>
    <table>
        <thead>
          <tr>
          <th className="text-center">IMAGEN</th>
            <th className="text-center titulo">TITULO</th>
            <th className="text-center"><p>CATEGORIA</p>
            <label htmlFor="categorias"></label>
              <select id="categorias" name="categorias" onChange={filtrarCategoria}>
                  <option value="all">Todos</option>
                  <option value="MLA1055">Celulares</option>
                  <option value="MLA14407">Monitor</option>
                  <option value="MLA1652">Notebooks</option>
              </select></th>
            <th className="text-center">PUBLICACION</th>
            <th className="text-center">ENVIO</th>
            <th className="text-center">TIPO <p>PUBLICACION</p></th>
            <th className="text-center">PRECIO $ {filtro.minPrice}
            <div>
<label htmlFor={productos.price}></label>
<input
type="range"
id={productos.price}
min="0"
max="1000000"
onChange={handelChangeMinPrice}
value={filtro.minPrice}
className='filtroRange'
/>
</div>
            </th>
            <th className="text-center">LINK</th>
            <th className="text-center">STOCK</th>
            <th className="text-center"><p>CATALOGO</p>
            <select id="catalogoGanando"  onChange={filtrarCatalogo}>
              <option value="all">Todos</option>
              <option value="true">En Catálogo</option>
              <option value="false">Sin Catálogo</option>
            </select>
            </th>
            <th className="text-center">VENDIDOS + {filtro.ventas}
            <div>
            <label htmlFor={productos.sold_quantity}></label>
<input
type="range"
id={productos.sold_quantity}
min="0"
max="1000"
onChange={handelChangeVendidos}
value={filtro.ventas}
className='filtroRange'
/>

            </div>
            
            </th>
          </tr>
        </thead>
        <tbody>
  {productoFiltrado.map(producto => (
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
  )
}
export default MostrarDatosMain;
