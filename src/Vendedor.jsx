import React, { useState, useEffect } from 'react';

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
            Authorization: `Bearer ${"APP_USR-7650143381075360-111519-e91a9d07fcaa73086476d496c47f84ed-65494552"}`,
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

  console.log(datosVendedor);

  // Resto del componente...

  return (
<>
<div className='container'>
    {datosVendedor && (
    <ul>
      <li>
        Nombre: {datosVendedor.nickname}
      </li>
      <li>
        Tipo de usuario : {datosVendedor.user_type}
      </li>
      <li>
        Fecha de alta: {datosVendedor.registration_date} 
      </li>
      <li>
        Dirección: {datosVendedor.address.address}
      </li>
      <li>
        Dirección: {datosVendedor.address.city}
      </li>
      <li>
        Código Postal: {datosVendedor.address.zip_code}
      </li>
      <li>
        Teléfono: Cod.Area: {datosVendedor.phone.area_code} Ext: {datosVendedor.phone.extension} nro: {datosVendedor.phone.number}
      </li>
      <li>
        Email: {datosVendedor.email}
      </li>
      <li>
        Email mercadolibre: {datosVendedor.secure_email}
      </li>
      <li>
        Experiencia como vendedor: {datosVendedor.seller_experience}
      </li>

      <li>
        Nombre: {datosVendedor.first_name}
      </li>
      <li>
        Apellido: {datosVendedor.last_name}
      </li>
      <li>
        Identificación: {datosVendedor.identification.number}
      </li>
      <li>
        Puntos: {datosVendedor.points} 
      </li>

      <li>
        Metricas cancelaciones: Periodo {datosVendedor.seller_reputation.metrics.cancellations.period} %  {datosVendedor.seller_reputation.metrics.cancellations.rate} cantidad {datosVendedor.seller_reputation.metrics.cancellations.value }
      </li>
      <li>
        Metricas reclamos: Periodo {datosVendedor.seller_reputation.metrics.claims.period} %  {datosVendedor.seller_reputation.metrics.claims.rate} cantidad {datosVendedor.seller_reputation.metrics.claims.value }
      </li>
      <li>
        Metricas demoras: Periodo {datosVendedor.seller_reputation.metrics.delayed_handling_time.period} %  {datosVendedor.seller_reputation.metrics.delayed_handling_time.rate} cantidad {datosVendedor.seller_reputation.metrics.delayed_handling_time.value }
      </li>
      <li>
        Metricas ventas: Periodo {datosVendedor.seller_reputation.metrics.sales.period} completadas  {datosVendedor.seller_reputation.metrics.sales.completed}
      </li>
      <li>
        Operaciones: Período {datosVendedor.seller_reputation.transactions.period} Canceladas {datosVendedor.seller_reputation.transactions.canceled} completadas  {datosVendedor.seller_reputation.transactions.completed} 
      </li>
      <li>
        Calificaciones: Negativas {datosVendedor.seller_reputation.transactions.ratings.negative} Neutrales {datosVendedor.seller_reputation.transactions.ratings.neutral} Positivas  {datosVendedor.seller_reputation.transactions.ratings.positive} Total {datosVendedor.seller_reputation.transactions.ratings.total}
      </li>
      <li>
        Estado del vendedor:  {datosVendedor.seller_reputation.metrics.power_seller_status} 
      </li>
      <li>
      Transacciones históricas: {datosVendedor.seller_reputation.transactions.total}
      </li>
      <li>
      Mercado Envíos: {datosVendedor.status.mercadoenvios}
      </li>
      <li>
      Tipo de cuenta: {datosVendedor.status.mercadopago_account_type}
      </li>
      <li>
      Mercado Pago: {datosVendedor.status.mercadopago_tc_accepted ? 'Aceptado' : 'No Aceptado'}
      </li>
      <li><img src={datosVendedor.thumbnail.picture_url}></img> </li>
  </ul>
    )}
    </div>
</>
  );
}

export default Vendedor;
