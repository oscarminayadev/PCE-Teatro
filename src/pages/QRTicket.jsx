import QRCode from "react-qr-code";

function QRTicket() {
  return (
    <div className="qr-page">
      <div className="qr-box">
        <h1>Boleto Electrónico</h1>

        <QRCode
          value="PCE-TEATRO-123456789"
          size={220}
        />

        <p>
          Código único del boleto
        </p>
      </div>
    </div>
  );
}

export default QRTicket;