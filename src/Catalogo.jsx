import React, { useState, useEffect } from 'react';

let access_token =  localStorage.getItem('accessToken');

function Catalogo() {
  const [datosCategoria, setDatosCategoria] = useState();

  useEffect(() => {
    const fetchResultados = async () => {
    //   const url = `https://api.mercadolibre.com/sites/MLA/search?category=MLA1051`;
      const url = `https://api.mercadolibre.com/sites/MLA/search?category=MLA1055`
      console.log(url);

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const data = await response.json();
        setDatosCategoria(data);
      } catch (error) {
        console.error('Error al obtener información de la búsqueda:', error);
      }
    };

    // Llama a la función al montar el componente
    fetchResultados();
  }, []);


  console.log(datosCategoria);

  return (
        <>
        </>


  );
}

export default Catalogo;