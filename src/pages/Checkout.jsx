function Checkout() {
  return (
    <div className="checkout-page">
      <div className="checkout-box">
        <h1>Finalizar Compra</h1>

        <form>
          <input
            type="text"
            placeholder="Nombre completo"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
          />

          <input
            type="text"
            placeholder="Número tarjeta"
          />

          <div className="row">
            <input
              type="text"
              placeholder="MM/YY"
            />

            <input
              type="text"
              placeholder="CVV"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              alert(
                "Pago realizado correctamente"
              );

              window.location.href =
                "/ticket";
            }}
          >
            Pagar RD$1500
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;