import React, { useState, useEffect } from 'react';


function Catalogo(accessToken) {

  const fetchResultados = () => {

    const url = ` https://api.mercadolibre.com/sites/MLA/search?nickname=impactotenis`;
    console.log(url);
  
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error('Error al obtener información de la búsqueda:', error);
      });
  };
  

  useEffect(() => {
    fetchResultados();
  }, []);





  return (
    <div className='BuscarProductos'>

    </div>
  );
}

export default Catalogo;
