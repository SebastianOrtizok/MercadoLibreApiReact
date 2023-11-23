import { useState, useEffect } from 'react';

const Filtro = ({ onFilterChange }) => {
  const [filtro, setFiltro] = useState({
    category: "all",
    buscador: "",
    minPrice: 0,
    catalogo: "all",
    ventas: 0
  });

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
    });
  };

  const busqueda = (event) => {
    const busqueda = event.target.value
    setFiltro ({...filtro,
      buscador: busqueda})
  }

  const filtrarCatalogo = (event) => {
    const filtroEnCatalogo = event.target.value;
    setFiltro({
      ...filtro,
      catalogo: filtroEnCatalogo
    });
  };

  // Llamamos a la función de devolución de llamada cuando el filtro cambia
  useEffect(() => {
    onFilterChange(filtro);
  }, [filtro]);

  return (
    <div className='filtro'>
      <div>
      <label>Categoría:</label>
      <select onChange={filtrarCategoria} value={filtro.category}>
        <option value="all">Todos</option>
        <option value="MLA1055">Celulares</option>
        <option value="MLA14407">Monitor</option>
        <option value="MLA1652">Notebooks</option>
      </select>
</div>
 <div>
 <input
  type="text"
  value={filtro.buscador}
  onChange={(event) => busqueda(event)}
  placeholder="Buscar productos..."
/>



    </div>
<div>
      <label>Catalogo:</label>
      <select onChange={filtrarCatalogo} value={filtro.catalogo}>
        <option value="all">Todos</option>
        <option value="true">En Catálogo</option>
        <option value="false">Sin Catálogo</option>
      </select>
</div>
<div>
      <label>Precio Mínimo:</label>
      <input
        type="range"
        min="0"
        max="1000000"
        onChange={handelChangeMinPrice}
        value={filtro.minPrice}
        className='filtroRange'
      />
      {filtro.minPrice}
</div>
<div>
      <label>Vendidos:</label>
      <input
        type="range"
        min="0"
        max="1000"
        onChange={handelChangeVendidos}
        value={filtro.ventas}
        className='filtroRange'
      />{filtro.ventas}
      </div>
    </div>
  );
};

export default Filtro;
