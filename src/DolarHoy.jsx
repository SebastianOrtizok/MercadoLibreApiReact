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
    <>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <table className='dolarHoy'>
        <thead>
      <tr>
      <th className="text-center">Dolar</th>
        <th className="text-center">Blue venta $ {dolarData.blue.value_sell}</th>
        <th className="text-center">Blue compra $ {dolarData.blue.value_buy}</th>
        <th className="text-center">Oficial venta $ {dolarData.oficial.value_sell}</th>
        <th className="text-center">Oficial compra $ {dolarData.oficial.value_buy}</th>
      </tr>
    </thead>
        </table>
      )}
    </>
  );
}

export default DolarHoy;

