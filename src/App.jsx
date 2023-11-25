import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Mercadolibreapi from "./Mercadolibreapi";
import Vendedor from "./Vendedor";
import Categorias from './Categorias';
import BuscarProductos from "./BuscarProducto";
import Header from "./Header";
import "./App.css";
import Categoria from './Categoria';
import Catalog from './Catalog';
import ObtenerAccesToken from './ObtenerAccesToken';
// import { Mysql} from "./Mysql";

// console.log (Mysql)



function App() {
	return (
		<>

			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Mercadolibreapi />} />
					<Route path="/vendedor" element={<Vendedor />} />
					<Route path="/categorias" element={<Categorias />} />
					<Route path="/categoria" element={<Categoria />} />
					<Route path="/Catalog" element={<Catalog />} />
					<Route path="/buscar" element={<BuscarProductos />} />
					<Route path="/acces" element={<ObtenerAccesToken />} />
					<Route path="*" element={<NotFound />} />
					<Route index element={<Mercadolibreapi />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
