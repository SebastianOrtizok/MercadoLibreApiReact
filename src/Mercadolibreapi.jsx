import React, { useEffect, useState } from "react";
import MostrarDatosMain from "./MostrarDatosMain";
import Vendedores from "./Vendedores";
// import BuscarProducto from "./BuscarProducto";
import Paginacion from "./Paginacion";

const accessToken =
  "APP_USR-7650143381075360-100510-4c6c367756352433dc0b1090097b5a55-65494552";
const apiUrlBase = "https://api.mercadolibre.com/sites/MLA/search?nickname=";


function Mercadolibreapi() {
  const [productos, setProductos] = useState([]);
  const [vendedorSeleccionado, setVendedorSeleccionado] = useState("ITECOM DIGITAL");
  const [totalPagina, setPaginaTotal] = useState([]);
  const [pagina, setPagina] = useState(1);
  const resultadosPorPagina = 50;

  useEffect(() => {
    fetchData();
  }, [vendedorSeleccionado, pagina]);

  const fetchData = async () => {
    const vendedorFormatoURL = vendedorSeleccionado.replace(/ /g, "%20");
    const offset = (pagina - 1) * resultadosPorPagina;
    const apiUrl = `${apiUrlBase}${vendedorFormatoURL}&search_type=scan&offset=${offset}`;
    console.log(apiUrl)
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }

      const productosData = await response.json();
      console.log( productosData )

      setProductos(productosData.results);
      setPaginaTotal(productosData.paging.total);
    } catch (error) {
      console.error(`Hubo un problema con la solicitud: ${error}`);
    }
  };

  const handleVendedorChange = (selectedVendedor) => {
    setVendedorSeleccionado(selectedVendedor);
    setPagina(1); // Resetear la página a la primera cuando se cambia de vendedor
  };

  const cambiarPagina = (nuevaPagina) => {
    setPagina(nuevaPagina);
  };

  return (
    <div>
      <Vendedores onVendedorChange={handleVendedorChange} />
      <MostrarDatosMain productos={productos} />
      <Paginacion
        totalResultados={totalPagina}
        resultadosPorPagina={resultadosPorPagina}
        paginaActual={pagina}
        cambiarPagina={cambiarPagina}
      />
    </div>
  );
}

export default Mercadolibreapi;
