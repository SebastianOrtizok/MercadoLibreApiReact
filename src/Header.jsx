import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/catalogo">
        <button>Catalogo</button>
      </Link>
      <Link to="/buscar">
        <button>BuscarProducto</button>
      </Link>
    </>
  );
}

export default Header;
