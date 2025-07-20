import "./Barra.css";

export default function Barra(props) {
    return (
        <div className="barra-box">
            <p>{props.label}</p>
        </div>
    );
}