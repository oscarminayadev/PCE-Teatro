import { Link } from "react-router-dom";

function Navbar() {

  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="navbar">

      <div className="nav-logo">
        PCE-Teatro
      </div>

      <ul>

        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/evento">
            Eventos
          </Link>
        </li>

        <li>
          <Link to="/checkout">
            Boletos
          </Link>
        </li>

        <li>
          <Link to="/ticket">
            Galería
          </Link>
        </li>

        <li>
          <Link to="/dashboard">
            Contacto
          </Link>
        </li>

      </ul>

      {
        user ? (

          <button
            className="login-btn"
            onClick={logout}
          >
            Cerrar Sesión
          </button>

        ) : (

          <Link to="/login">

            <button className="login-btn">
              Iniciar Sesión
            </button>

          </Link>

        )
      }

    </nav>
  );
}

export default Navbar;