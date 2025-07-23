import "./AuthPages.css";
import hero from "../assets/images/hero-img.png";
import { useNavigate } from "react-router";
import api from "../service/api";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        email,
        senha,
      });

      // Login bem-sucedido
      console.log("Usuário logado:", response.data);
      setErro("");
      // Redirecionar ou guardar dados aqui
      localStorage.setItem("usuarioLogado", JSON.stringify(response.data));
      navigate("/dashboard");
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErro("Email ou senha incorretos.");
      } else {
        console.error("Erro desconhecido:", error);
        setErro("Email ou senha incorretos.");
      }
    }
  };

  return (
    <>
      <div className="main">
        <div className="box">
          <div className="innerBox">
            <p className="title">Olá! <br/> Faça seu login.</p>
            <form onSubmit={handleLogin}>
              <div className="label">
                <label>Login</label>
                <input
                  type="text"
                  name="login"
                  placeholder="Login"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {erro && <p className="error">{erro}</p>}
              </div>
              <div className="label">
                <label>Senha</label>
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div className="divBtn">
                <input className="btn" type="submit" value="Entrar" />
              </div>
            </form>
          </div>
        </div>
        <img className="hero-img" src={hero} alt="Imagem de fundo" />
      </div>
    </>
  );
}
