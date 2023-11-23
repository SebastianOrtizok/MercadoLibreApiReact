import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const menuoff = ()=>{
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className={`menu-h ${menuOpen ? 'menu-open' : ''}`}>
        <button className="js-menu menu" onClick={toggleMenu} type="button">
          <span className="bar"></span>
        </button>
        <nav onMouseLeave={menuoff}>
          <h2>JavascriptSolutions</h2>
          <span>Consumiendo api ML</span>
          <ul>
            <Link to="/" onClick={closeMenu}>
              <li>
                <i className="fa fa-home"></i> Home
              </li>
            </Link>
            <Link to="/vendedor" onClick={closeMenu}>
              <li>
                <i className="fa fa-user"></i> Vendedor
              </li>
            </Link>
            <Link to="/categorias" onClick={closeMenu}>
              <li>
                <i className="fa fa-table"></i> Categorías
              </li>
            </Link>
            <Link to="/catalogo" onClick={closeMenu}>
              <li>
                <i className="fa fa-clipboard"></i> Catalogo
              </li>
            </Link>
            <Link to="/catalog" onClick={closeMenu}>
              <li>
                <i className="fa fa-credit-card"></i> Catalog
              </li>
            </Link>
            <Link to="/buscar" onClick={closeMenu}>
              <li>
                <i className="fa fa-search"></i> BuscarProducto
              </li>
            </Link>
            <Link to="/acces" onClick={closeMenu}>
              <li>
                <i className="fa fa-credit-card"></i>Acceso
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
