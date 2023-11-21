import React, { useState, useEffect } from 'react';

let access_token =  localStorage.getItem('accessToken');

function Categorias() {
  const [datosCatalogo, setDatosCatalogo] = useState();

  useEffect(() => {
    const fetchResultados = async () => {
      // const url = `https://api.mercadolibre.com/my/received_questions/search`;
      // const url = `https://api.mercadolibre.com/sites/MLA/search?category=MLA1051` url catalogos
      const url = `https://api.mercadolibre.com/categories/MLA1051/`
      console.log(url);

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
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
<div className='contenedorTablaPrincipal'>
      {datosCatalogo && (
        <>
          <table className='tablecategoriasgral'>
            <thead>
              <tr>
                <th className="text-center">IMAGEN</th>
                <th className="text-center titulo">CATEGORIA MADRE</th>
                <th className="text-center"><p>ITEMS EN CATEGORIA</p></th>
              </tr>
            </thead>
            <tbody>
              <tr key={datosCatalogo.id}>
                <td><img src={datosCatalogo.picture} width={100} alt="Producto" /></td>
                <td>{datosCatalogo.name}</td>
                <td>{datosCatalogo.total_items_in_this_category}</td>
              </tr>
            </tbody>
          </table>
<div className='categorias'>
          {datosCatalogo.children_categories.map((datoSubCategoria) => (
  <table className='tablecategorias' key={datoSubCategoria.id}>
    <thead>
      <tr>
        <th className="text-center">CATEGORIAS HIJAS </th>
        <th className="text-center"><p>ITEMS EN CATEGORIA</p></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{datoSubCategoria.name}</td>
        <td>{datoSubCategoria.total_items_in_this_category}</td>
      </tr>
    </tbody>
  </table>
))}
</div>

        </>
      )}
    </div>
  );
}

export default Categorias;