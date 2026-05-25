function Login() {
  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Iniciar Sesión</h1>

        <input
          type="email"
          placeholder="Correo"
        />

        <input
          type="password"
          placeholder="Contraseña"
        />

        <button>
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;