import React, { useEffect } from "react";

function ObtenerAccessToken() {
  useEffect(() => {
    // Llama a la función para obtener el token de acceso usando el refresh token
    obtenerTokenDeAcceso();
  }, []);

  const obtenerTokenDeAcceso = async () => {
    const apiUrl = 'https://api.mercadolibre.com/oauth/token';

    // Configurar el grant_type y los datos necesarios para el refresh token
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('client_id', '65494552');
    params.append('client_secret', '5SQCr1FJskKmTCW5R7T6mi7Xph6zZIQc');
    params.append('refresh_token', 'TG-655667f0d21abc0001c85721-65494552');

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    };

    try {
      // Realizar la solicitud POST para obtener el nuevo token de acceso
      const response = await fetch(apiUrl, requestOptions);

      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }

      // Analizar la respuesta JSON
      const data = await response.json();

      // Trabajar con los datos recibidos, como el nuevo token de acceso
      console.log(data);

      // Guardar el nuevo accessToken y refreshToken en localStorage
      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('refreshToken', data.refresh_token);
      } catch (error) {
      console.error(`Hubo un problema con la solicitud: ${error}`);
    }
  };

  return (
    <div>

    </div>
  );
}

export default ObtenerAccessToken;
