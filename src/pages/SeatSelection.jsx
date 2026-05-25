import { Link } from "react-router-dom";

const seats = Array.from({ length: 40 });

function SeatSelection() {
  return (
    <div className="seat-page">
      <h1>Seleccionar Asientos</h1>

      <div className="screen">
        ESCENARIO
      </div>

      <div className="seats-grid">
        {seats.map((_, index) => (
          <div
            key={index}
            className="seat"
          >
            {index + 1}
          </div>
        ))}
      </div>

      <Link to="/checkout">
        <button className="continue-btn">
          Continuar Compra
        </button>
      </Link>
    </div>
  );
}

export default SeatSelection;