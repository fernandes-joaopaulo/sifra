import "./Card.css";

export default function Card(props) {
    return (
        <div className="card-box">
            <div>
                <img src={props.icon} alt="Ícone"/>
            </div>
            <p>{props.label}</p>
        </div>
    );
}