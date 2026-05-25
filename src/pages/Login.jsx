import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if(email && password){
      localStorage.setItem("user", email);
      alert("Inicio de sesión exitoso");
      navigate("/");
    } else {
      alert("Completa todos los campos");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-box">

        <h1>Iniciar Sesión</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">
            Entrar
          </button>

        </form>

      </div>

    </div>
  );
}