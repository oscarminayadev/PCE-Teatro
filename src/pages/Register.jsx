function Register() {
  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Crear Cuenta</h1>

        <input
          type="text"
          placeholder="Nombre"
        />

        <input
          type="email"
          placeholder="Correo"
        />

        <input
          type="password"
          placeholder="Contraseña"
        />

        <button>
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default Register;