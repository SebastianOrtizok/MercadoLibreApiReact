import React, { useEffect, useState } from "react";
import MostrarDatosMain from "./MostrarDatosMain";
import Vendedores from "./Vendedores";
import BuscarProducto from "./BuscarProducto";



const accessToken =
	"APP_USR-7650143381075360-100510-4c6c367756352433dc0b1090097b5a55-65494552";
const apiUrlBase = "https://api.mercadolibre.com/sites/MLA/search?nickname=";

function Mercadolibreapi() {
	const [productos, setProductos] = useState([]);
	const [vendedorSeleccionado, setVendedorSeleccionado] =
		useState("ITECOM DIGITAL");

	useEffect(() => {
		// Reemplaza los espacios en el valor del vendedor seleccionado con "%20"
		const vendedorFormatoURL = vendedorSeleccionado.replace(/ /g, "%20");
		const apiUrl = `${apiUrlBase}${vendedorFormatoURL}&search_type=scan&scroll_id=YXBpY29yZS1xdWVzdGlvbnM=:ZHMtYXBpY29yZS1xdWVzdGlvbnMtMDI=:FGluY2x1ZGVfY29udGV4dF91dWlkDXF1ZXJ5QW5kFmV0Y2gBFFdXNVZTSXNCT1E0T0ZoN094UUpFAAAAAMr2v2MWSlRTbVBCUnhRc09ySVNFR1SNSw==`;

		buscarProductos(apiUrl, "principal");
	}, [vendedorSeleccionado]);

	const handleVendedorChange = (selectedVendedor) => {
		setVendedorSeleccionado(selectedVendedor);
	};

	async function buscarProductos(apiUrl, opcion) {
		try {
			console.log(apiUrl);
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

			if (opcion === "principal") {
				setProductos(productosData.results);
			}
		} catch (error) {
			console.error(`Hubo un problema con la solicitud: ${error}`);
		}
	}

	return (
		<div>
		<Vendedores onVendedorChange={handleVendedorChange} />
		<MostrarDatosMain productos={productos} />
		<BuscarProducto accessToken={accessToken} />
		</div>
	);
}

export default Mercadolibreapi;
