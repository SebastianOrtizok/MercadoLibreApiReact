import React, { useState, useEffect } from 'react';

function DolarHoy() {
  const [dolarData, setDolarData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrld = "https://api.bluelytics.com.ar/v2/latest";

    // Realizar la solicitud a la API al cargar el componente
    fetch(apiUrld)
      .then(response => response.json())
      .then(data => {
        setDolarData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener información del dólar:', error);
        setLoading(false);
      });
  }, []); // El segundo argumento vacío [] asegura que se realice la solicitud una vez al cargar el componente

  return (
    <div>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <table>
        <thead>
      <tr>
      <th className="text-center">Dolar</th>
        <th className="text-center">Blue<p>$ {dolarData.blue.value_sell}</p></th>
        <th className="text-center">Blue<p>$ {dolarData.blue.value_buy}</p></th>
        <th className="text-center">Oficial<p>$ {dolarData.oficial.value_sell}</p></th>
        <th className="text-center">Oficial<p>$ {dolarData.oficial.value_buy}</p></th>
      </tr>
    </thead>
        </table>
      )}
    </div>
  );
}

export default DolarHoy;

