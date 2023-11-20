import React, { useState, useEffect } from 'react';

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
            Authorization: `Bearer ${"APP_USR-7650143381075360-112009-a45845125db4e4bb22def038b7b974b3-65494552"}`,
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