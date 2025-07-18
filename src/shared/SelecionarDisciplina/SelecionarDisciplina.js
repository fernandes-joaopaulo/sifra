import "./SelecionarDisciplina.css"

import Barra from "../../components/Barra/Barra"
import Button from "../../components/Button/Button"

export default function SelecionarDisciplina(props) {
    return (
        <div className="container">
            <p className="title">Selecione a disciplina desejada: </p>
            <div className="barras">
            {props.disciplinas.map((disciplina) => (
                <Barra key={disciplina.cod} label={disciplina.nome}/>
            ))}
            </div>
            <div className="botoes">
                <Button value={"Voltar"} color={"#fff"} backgroundColor={"#000"}/>
                <Button value={"Continuar"} color={"#000"} backgroundColor={"#20BF55"}/>
            </div>
        </div>
    );
}