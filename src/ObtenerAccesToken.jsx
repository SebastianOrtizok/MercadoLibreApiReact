const ObtenerAccesToken = async () => {
  const url = 'https://api.mercadolibre.com/oauth/token';
  const clientId = '7650143381075360';
  const clientSecret = '5SQCr1FJskKmTCW5R7T6mi7Xph6zZIQc';
  const refreshTokenValue = 'TG-655be65681c20700014c3dae-65494552';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshTokenValue,
      }),
    });

    const data = await response.json();

    // Guarda los tokens en localStorage
    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);

    console.log('Token actualizado:', data);
    return data;
  } catch (error) {
    console.error('Error al actualizar el token:', error.message);
  }
};

// Llama a la función para actualizar el token
ObtenerAccesToken();

export default ObtenerAccesToken;


