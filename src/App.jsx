import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import Mercadolibreapi from "./Mercadolibreapi";
import Vendedor from "./Vendedor";
import Categorias from './Categorias';
import BuscarProductos from "./BuscarProducto";
import Header from "./Header";
import "./App.css";
import Catalogo from './Catalogo';
// import ObtenerAccessToken from "./ObtenerAccesToken";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Mercadolibreapi />} />
					<Route path="/vendedor" element={<Vendedor />} />
					<Route path="/categorias" element={<Categorias />} />
					<Route path="/Catalogo" element={<Catalogo />} />
					<Route path="/buscar" element={<BuscarProductos />} />
					<Route path="*" element={<NotFound />} />
					<Route index element={<Mercadolibreapi />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
