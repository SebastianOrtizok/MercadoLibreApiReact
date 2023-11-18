import React from 'react';

function Paginacion({ totalResultados, resultadosPorPagina, paginaActual, cambiarPagina }) {
  const totalPaginas = Math.ceil(totalResultados / resultadosPorPagina);
  const paginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);

  // Calcula el rango de páginas que se mostrarán (de 10 en 10)
  const rangoInicio = (Math.floor((paginaActual - 1) / 10) * 10) + 1;
  const rangoFin = Math.min(rangoInicio + 9, totalPaginas);
  

  return (
    <ul className="paginacion-horizontal">
    {paginas.slice(rangoInicio - 1, rangoFin).map(p => (
      <li key={p}>
        <button
          onClick={() => cambiarPagina(p)}
          className={paginaActual === p ? "pagina-actual" : ""}
        >
          {p}
        </button>
      </li>
    ))}

  </ul>
  
  );
}

export default Paginacion;


