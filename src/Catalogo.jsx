import React, { useState, useEffect } from 'react';

function Catalogo() {
  const [datosCatalogo, setDatosCatalogo] = useState();

  useEffect(() => {
    const fetchResultados = async () => {
      // const url = `https://api.mercadolibre.com/my/received_questions/search`;
      const url = `https://api.mercadolibre.com/items/MLA1234567/price_to_win?version=v2`
      console.log(url);

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${"APP_USR-7650143381075360-111519-e91a9d07fcaa73086476d496c47f84ed-65494552"}`,
          },
        });

        const data = await response.json();
        setDatosCatalogo(data);
      } catch (error) {
        console.error('Error al obtener información de la búsqueda:', error);
      }
    };

    // Llama a la función al montar el componente
    fetchResultados();
  }, []);

  console.log(datosCatalogo);


  return (
<>
    {datosCatalogo && (
<p>ok</p>
    )}
</>
  );
}

export default Catalogo;