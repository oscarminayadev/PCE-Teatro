import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Events() {

  const [events, setEvents] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:5000/api/eventos")
      .then((res) => res.json())
      .then((data) => {

        console.log("EVENTOS:", data);

        // EVENTOS EXTRA
        const extraEvents = [
          {
            id: 100,
            titulo: "Noche de Jazz",
            descripcion: "Una experiencia musical inolvidable.",
            fecha: "2026-06-30",
            hora: "8:00 PM",
            nombre_sala: "Sala Principal",
            precio_base: 2200,
            imagen:
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
          },

          {
            id: 101,
            titulo: "Danza Moderna",
            descripcion: "Espectáculo artístico contemporáneo.",
            fecha: "2026-07-05",
            hora: "7:30 PM",
            nombre_sala: "Sala Experimental",
            precio_base: 1700,
            imagen:
              "https://images.unsplash.com/photo-1508804185872-d7badad00f7d"
          }
        ];

        setEvents([...data, ...extraEvents]);

      })
      .catch((error) => {

        console.log("ERROR:", error);

      });

  }, []);

  return (

    <section className="events-section">

      <h2
        style={{
          textAlign: "center",
          color: "gold",
          marginBottom: "40px",
          fontSize: "60px"
        }}
      >
        Próximos Eventos
      </h2>

      <div
        className="events-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px"
        }}
      >

        {events.map((event) => (

          <div
            className="event-card"
            key={event.id}
            style={{
              background: "#111",
              borderRadius: "15px",
              overflow: "hidden",
              border: "1px solid gold",
              marginBottom: "30px",
              transition: "0.3s"
            }}
          >

            <img
              src={
                event.imagen ||
                "https://images.unsplash.com/photo-1516280440614-37939bbacd81"
              }
              alt={event.titulo}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover"
              }}
            />

            <div
              className="event-content"
              style={{
                padding: "20px",
                color: "white",
                textAlign: "center"
              }}
            >

              <h3
                style={{
                  color: "gold",
                  fontSize: "35px"
                }}
              >
                {event.titulo}
              </h3>

              <p>
                {event.descripcion}
              </p>

              <p>
                📅 {event.fecha}
              </p>

              <p>
                🕒 {event.hora}
              </p>

              <p>
                🎭 {event.nombre_sala}
              </p>

              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "gold"
                }}
              >
                RD${event.precio_base}
              </span>

              <br />
              <br />

              <Link to="/evento">

                <button
                  style={{
                    background: "gold",
                    color: "black",
                    border: "none",
                    padding: "12px 25px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}
                >
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