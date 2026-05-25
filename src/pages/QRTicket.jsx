function QRTicket() {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1 style={{ color: "white" }}>
       🎟 Ticket Generado
      </h1>

      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=EntradaTeatro"
        alt="QR Ticket"
      />

      <p>Presenta este código QR en la entrada</p>
    </div>
  );
}

export default QRTicket;