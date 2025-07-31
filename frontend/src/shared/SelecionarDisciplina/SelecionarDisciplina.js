import "./SelecionarDisciplina.css";
import Barra from "../../components/Barra/Barra";
import Button from "../../components/Button/Button";
import api from "../../service/api";

import { useNavigate } from "react-router";
import React, { useState } from "react";

export default function SelecionarDisciplina() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const [turmas, setTurmas] = useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchTurmas() {
      try {
        if (usuario.perfil === "docente") {
          const response = await api.get("/frequencia/turmas", {
            params: { docenteId: usuario.id },
          });
          setTurmas(response.data);
        }
        if(usuario.perfil === "coordenador"){
          const response = await api.get("/turmas");
          setTurmas(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar turmas:", error);
      }
    }
    fetchTurmas();
  }, [usuario.id, usuario.perfil]);

  return (
    <div className="container">
      <p className="title">Selecione a disciplina desejada: </p>
      <div className="barras">
        {turmas.map((turma) => (
          <div
            key={turma.disciplina.codigo}
            onClick={() => navigate(`./${turma.disciplina.id}`)}
          >
            <Barra
              label={`${turma.disciplina.codigo} - ${turma.disciplina.nome}`}
            />
          </div>
        ))}
      </div>
      <div className="botoes">
        <div onClick={() => navigate(-1)}>
          <Button value={"Voltar"} backgroundColor={"#000"} color={"#fff"} />
        </div>
      </div>
    </div>
  );
}
