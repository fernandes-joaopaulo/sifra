import "./Dashboard.css";
import Card from "../../components/Card/Card";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (usuario.perfil === "docente") {
      setCards([
        { label: "Lançar frequência", icon: "check-list.png" },
        { label: "Registro de alunos", icon: "alunos.png" },
        { label: "Minhas informações", icon: "info.png" },
      ]);
    }
    if (usuario.perfil === "discente") {
      setCards([
        { label: "Consultar frequência", icon: "consulta.png" },
        { label: "Minhas informações", icon: "info.png" },
      ]);
    }
    if (usuario.perfil === "admin") {
      setCards([
        { label: "Solicitações de Cadastro", icon: "check-list.png" },
        { label: "Gerenciar usuários", icon: "consulta.png" },
      ]);
    }
    if (usuario.perfil === "coordenador") {
      setCards([
        { label: "Gerar relatório", icon: "check-list.png" },
        { label: "Minhas informações", icon: "info.png" },
        { label: "Registro de alunos", icon: "alunos.png" },
      ]);
    }
  }, [usuario.perfil]);

  // Define as rotas para cada card, de acordo com o perfil
  const getCardRoute = (label) => {
    switch (label) {
      case "Lançar frequência":
        return "./lancarFrequencia";
      case "Consultar frequência":
        return "./consultarFrequencia";
      case "Minhas informações":
        return "./perfil";
      case "Registro de alunos":
        return "./registro";
      default:
        return "/";
    }
  };

  return (
    <>
      <div className="main-dashboard">
        <p className="saudacao">Olá, {usuario.nome}!</p>
        <div className="cards">
          {cards.map((info) => (
            <div
              key={info.label}
              onClick={() => navigate(getCardRoute(info.label))}
            >
              <Card label={info.label} icon={info.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
