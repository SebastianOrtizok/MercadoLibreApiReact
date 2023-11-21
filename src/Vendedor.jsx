import React, { useState, useEffect } from 'react';

let access_token =  localStorage.getItem('accessToken');

function Vendedor() {
  const [datosVendedor, setDatosVendedor] = useState();

  useEffect(() => {
    const fetchResultados = async () => {
      const url = `https://api.mercadolibre.com/users/65494552`;
      console.log(url);

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const data = await response.json();
        setDatosVendedor(data);
      } catch (error) {
        console.error('Error al obtener información de la búsqueda:', error);
      }
    };

    // Llama a la función al montar el componente
    fetchResultados();
  }, []);

  console.log("Acces Token pagina vendedor: ")
  console.log(datosVendedor);

  // Resto del componente...

  return (
<>
<div className='contenedorTablaPrincipal'>
    {datosVendedor && (
      <table>
      <tr>
      <td>
      Usuario: {datosVendedor.nickname}
      </td>
        <td>
        <img src={datosVendedor.thumbnail.picture_url} width={100}></img>
        </td>
      </tr>
      <tr>
          <td>Tipo de cuenta: {datosVendedor.status.mercadopago_account_type}</td>
          <td>
          Tipo de usuario: {datosVendedor.user_type}
          </td>  
         </tr>
         <tr>
          <td>
          Fecha de alta:
          </td>
          <td>{Date(datosVendedor.registration_date)} </td>
          </tr>
        <tr>
        <td>
          Teléfono:
          </td>
          <td>Cod.Area: {datosVendedor.phone.area_code} Ext: {datosVendedor.phone.extension} nro: {datosVendedor.phone.number}</td>
        </tr>
        <tr>
        </tr>
        <tr>
          <td>
          Dirección:
          </td>
          <td>{datosVendedor.address.address}  {datosVendedor.address.city}</td>
        </tr>
        <tr>
        <td>
          Código Postal:
          </td>
          <td> {datosVendedor.address.zip_code}</td>
        </tr>

        <tr>
          
        </tr>
        <tr>
          <td>
          Email:
          </td>
          <td>{datosVendedor.email}</td>
        </tr>
        <tr>
          <td>
          Email mercadolibre:
          </td>
          <td> {datosVendedor.secure_email}</td>
        </tr>
        <tr>
          <td>
          Experiencia como vendedor::
          </td>
          <td>{datosVendedor.seller_experience}</td>
        </tr>
        <tr>
          <td>
          Nombre:
          </td>
          <td>{datosVendedor.first_name} Apellido: {datosVendedor.last_name}</td>
        </tr>
        <tr>
          <td>
          Identificación:
          </td>
          <td>{datosVendedor.identification.number}</td>
        </tr>
        <tr>
          <td>
          Puntos:
          </td>
          <td>{datosVendedor.points}</td>
        </tr>
        <tr>
          <td>
          Cancelaciones:
          </td>
          <td>Periodo {datosVendedor.seller_reputation.metrics.cancellations.period} %  {datosVendedor.seller_reputation.metrics.cancellations.rate} cantidad {datosVendedor.seller_reputation.metrics.cancellations.value }</td>
        </tr>
        <tr>
          <td>
          Reclamos:
          </td>
          <td> Periodo {datosVendedor.seller_reputation.metrics.claims.period} %  {datosVendedor.seller_reputation.metrics.claims.rate} cantidad {datosVendedor.seller_reputation.metrics.claims.value }</td>
        </tr>
        <tr>
          <td>
          demoras:
          </td>
          <td> Periodo {datosVendedor.seller_reputation.metrics.delayed_handling_time.period} %  {datosVendedor.seller_reputation.metrics.delayed_handling_time.rate} cantidad {datosVendedor.seller_reputation.metrics.delayed_handling_time.value }</td>
        </tr>
        <tr>
          <td>
          ventas:
          </td>
          <td>Periodo {datosVendedor.seller_reputation.metrics.sales.period} completadas  {datosVendedor.seller_reputation.metrics.sales.completed}</td>
        </tr>
        <tr>
          <td>
          Operaciones:
          </td>
          <td> Período {datosVendedor.seller_reputation.transactions.period} Canceladas {datosVendedor.seller_reputation.transactions.canceled} completadas  {datosVendedor.seller_reputation.transactions.completed} </td>
        </tr>
        <tr>
          <td>
          Calificaciones:
          </td>
          <td>Negativas {datosVendedor.seller_reputation.transactions.ratings.negative} Neutrales {datosVendedor.seller_reputation.transactions.ratings.neutral} Positivas  {datosVendedor.seller_reputation.transactions.ratings.positive} Total {datosVendedor.seller_reputation.transactions.ratings.total}</td>
        </tr>
        <tr>
          <td>
          Estado del vendedor:
          </td>
          <td>{datosVendedor.seller_reputation.metrics.power_seller_status}</td>
        </tr>
        <tr>
          <td>
          Transacciones históricas:
          </td>
          <td> {datosVendedor.seller_reputation.transactions.total}</td>
        </tr>
        <tr>
          <td>
          Mercado Envíos:
          </td>
          <td>{datosVendedor.status.mercadoenvios}</td>
        </tr>

        <tr>
          <td>
          Mercado Pago:
          </td>
          <td>{datosVendedor.status.mercadopago_tc_accepted ? 'Aceptado' : 'No Aceptado'}</td>
        </tr>
      </table>



    )}
    </div> 
</>
  );
}

export default Vendedor;