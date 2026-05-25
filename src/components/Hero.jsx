import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>
          Teatro Nacional Eduardo Brito
        </h1>

        <p>
          Vive la magia del arte,
          la música y el teatro.
        </p>

        <div className="hero-buttons">
          <Link to="/checkout">
            <button className="gold-btn">
              Comprar Boletos
            </button>
          </Link>

          <Link to="/evento">
            <button className="dark-btn">
              Ver Programación
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;