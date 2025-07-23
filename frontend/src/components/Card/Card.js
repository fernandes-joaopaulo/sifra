import "./Card.css";

export default function Card(props) {

    const iconSrc = require(`../../assets/icons/${props.icon}`);

    return (
        <div className="card-box">
            <div>
                <img src={iconSrc} alt="Ícone"/>
            </div>
            <p>{props.label}</p>
        </div>
    );
}