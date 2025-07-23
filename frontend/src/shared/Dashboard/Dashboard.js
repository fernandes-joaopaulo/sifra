import "./Dashboard.css";
import Card from "../../components/Card/Card";
import React, { useState } from "react";

export default function Dashboard() {

    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    const[cards, setCards] = useState([]);
    
    React.useEffect(() => {

        if (usuario.perfil === "docente") {
            setCards([
                { label: "Lançar Frequência", icon: "check-list.png" },
                { label : "Consultar Frequência", icon: "consulta.png"},
                { label: "Minhas informações", icon: "info.png"},
                { label: "Registro de alunos", icon: "alunos.png"}
            ]);
        }
    }, [usuario.perfil]);

    return (
        <>
            <div className="main-dashboard">
                <p className="saudacao">Olá, {usuario.nome}!</p>
                <div className="cards">
                    {cards.map((info) => (
                        <Card key={info.label} label={info.label} icon={info.icon}/>
                    ))}
                </div>
            </div>
        </>
    );
}