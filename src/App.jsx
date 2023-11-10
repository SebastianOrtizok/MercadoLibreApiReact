import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';
import Mercadolibreapi from './Mercadolibreapi';
import Catalogo from './Catalogo';
import BuscarProductos from './BuscarProducto';
import Header from './Header';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={<Mercadolibreapi />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/buscar" element={<BuscarProductos />} />
          <Route path="*" element={<NotFound />} />
          <Route index element={<Mercadolibreapi />} />
        </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
