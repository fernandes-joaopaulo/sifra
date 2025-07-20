import "./Dashboard.css";
import Card from "../../components/Card/Card";

export default function Dashboard(props) {
    return (
        <>
            <div className="main">
                <p className="saudacao">Olá, {props.username}!</p>
                <div className="cards">
                    {props.cards.map((info) => (
                        <Card key={info.label} label={info.label} icon={info.icon}/>
                    ))}
                </div>
            </div>
        </>
    );
}