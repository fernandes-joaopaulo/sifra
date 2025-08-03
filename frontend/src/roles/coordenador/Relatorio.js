import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import api from "../../service/api";
import Button from "../../components/Button/Button";

export default function Relatorio() {
  const { turmaId } = useParams();
  const [discentes, setDiscentes] = useState([]);
  const [turma, setTurma] = useState({});
  const navigate = useNavigate();

  let totalFaltas = 0;
  for (const d of discentes) {
    totalFaltas += d.faltas;
  }
  const media = parseInt(totalFaltas / (discentes.length));
  React.useEffect(() => {
    async function fetchDiscentes() {
      try {
        const response = await api.get("/frequencia/discentes", {
          params: { turmaId: turmaId },
        });
        setDiscentes(response.data);

        const turmas = await api.get("/turmas");
        for(const t of turmas.data){
            if(String(t.id) === String(turmaId)){
                setTurma(t);
                console.log(t)
            }
        }
      } catch (error) {
        console.error("Erro ao buscar discentes:", error);
      }
    }
    fetchDiscentes();
  }, [turmaId]);

  return (
    <div className="flex-container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ fontWeight: 600 }}>
          A turma possui {discentes.length} alunos matriculados. A média de
          faltas atual é {media}.
        </p>
        <p>
          <b>Carga horária:</b> {(turma.disciplina?.cargaHoraria !== undefined ? turma.disciplina.cargaHoraria.toString() : "N/A")} horas
        </p>
        <p>
          <b>Faltas permitidas:</b> {(turma.disciplina?.faltasPermitidas !== undefined ? turma.disciplina.faltasPermitidas.toString() : "N/A")}
        </p>
      </div>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Faltas</th>
            </tr>
          </thead>
          <tbody>
            {discentes.map((row) => (
              <tr key={row.matricula}>
                <td>{row.nome}</td>
                <td>{row.matricula}</td>
                <td>{row.faltas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
      <div className="botoes">
        <div onClick={() => navigate(-1)}>
          <Button value={"Voltar"} backgroundColor={"#000"} color={"#fff"} />
        </div>
      </div>
    </div>
  );
}
