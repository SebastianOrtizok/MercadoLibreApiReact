import React, { useState } from 'react';

function CatalogInfo({ catalogProductId }) {
  const [catalogInfo, setCatalogInfo] = useState(null);
  const [isOpened, setIsOpened] = useState(false);

  const accessToken = "APP_USR-7650143381075360-100510-4c6c367756352433dc0b1090097b5a55-65494552";
  
  // Interpola catalogProductId en la URL de la API
  const apiUrlCatalog = `https://api.mercadolibre.com/sites/MLA/search?q=${catalogProductId}`;
  console.log(apiUrlCatalog)

  const handleOpenCatalogInfo = () => {
    // Realizar la solicitud a la API al hacer clic en el catálogo
    fetch(apiUrlCatalog, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setCatalogInfo(data);
        setIsOpened(true);
      })
      .catch(error => {
        console.error('Error al obtener información del catálogo:', error);
      });
  };

  return (
    <div>
      <button onClick={handleOpenCatalogInfo}>Abrir Catálogo</button>
      {isOpened && catalogInfo && (
        <div>
          {/* Renderiza la información del catálogo */}
          <h2>Información del Catálogo</h2>
          <p>Descripción: {catalogInfo.description}</p>
          <p>Precio: {catalogInfo.price}</p>
          {/* Agrega más propiedades del catálogo según lo que necesites */}
        </div>
      )}
    </div>
  );
}

export default CatalogInfo;
