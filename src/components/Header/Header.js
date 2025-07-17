import './Header.css';
import logo from "../../assets/images/logo.png";

export default function Header(props){

    return(
        <div className="container">
            <div>
                <img src={logo} alt="Logo do SIFRA" className="responsive-img"/>
            </div>
            <div className="user" style={{display: `${props.display}`}}>
                <p>{props.username}</p>
                <img src={props.image} alt="Foto do usuário"/>
            </div>
        </div>
    );
}
