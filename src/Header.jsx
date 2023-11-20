import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`menu-h ${menuOpen ? 'menu-open' : ''}`}>
        <button className="js-menu menu" onClick={toggleMenu} type="button">
          <span className="bar"></span>
        </button>
        <nav>
          <h2>JavascriptSolutions</h2>
          <span>
            Consumiendo api ML
          </span>
          <ul>
          <Link to="/">
            <li>
              <i className="fa fa-home"></i>
             Home
            </li>
            </Link>
            <Link to="/vendedor">
            <li>
              <i className="fa fa-wpforms"></i>
   Vendedor
            </li>
            </Link>
            <Link to="/categorias">
            <li>
              <i className="fa fa-credit-card"></i>
              Categorías
            </li>
            </Link>
            <Link to="/catalogo">
            <li>
              <i className="fa fa-credit-card"></i>
              Catalogo
            </li>
            </Link>
            <Link to="/buscar">
            <li>
              <i className="fa fa-credit-card"></i>
              BuscarProducto
            </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
