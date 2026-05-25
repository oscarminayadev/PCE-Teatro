import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Concierto Sinfónico",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35",
    date: "15 Junio 2026",
    price: "RD$1500",
  },

  {
    id: 2,
    title: "Obra Teatral",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    date: "20 Junio 2026",
    price: "RD$2000",
  },

  {
    id: 3,
    title: "Festival Cultural",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    date: "25 Junio 2026",
    price: "RD$1800",
  },
];

function Events() {
  return (
    <section className="events-section">
      <h2>Próximos Eventos</h2>

      <div className="events-grid">
        {events.map((event) => (
          <div
            className="event-card"
            key={event.id}
          >
            <img
              src={event.image}
              alt={event.title}
            />

            <div className="event-content">
              <h3>{event.title}</h3>

              <p>{event.date}</p>

              <span>{event.price}</span>

              <Link to="/evento">
                <button>
                  Comprar Boletos
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;