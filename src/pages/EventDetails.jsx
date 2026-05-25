import { Link } from "react-router-dom";

function EventDetails() {
  return (
    <div className="details-page">
      <img
        className="details-banner"
        src="https://images.unsplash.com/photo-1503095396549-807759245b35"
      />

      <div className="details-content">
        <h1>Concierto Sinfónico</h1>

        <p>
          Una experiencia musical inolvidable
          en el Teatro Nacional Eduardo Brito.
        </p>

        <div className="details-info">
          <span>📅 15 Junio 2026</span>
          <span>🕒 8:00 PM</span>
          <span>📍 Sala Carlos Piantini</span>
        </div>

        <Link to="/seats">
          <button>
            Comprar Boletos
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EventDetails;