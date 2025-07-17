import "./Dashboard.css";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";

import pic from "../assets/images/user.jpeg";

export default function Dashboard(props) {

    return (
        <>
            <Header image={pic} username={props.username}/>
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