import './Header.css';
import logo from "../assets/logo.png";

export default function Header(userImg){

    console.log(userImg);

    return(
        <div className="container">
            <div>
                <img src={logo} alt="Logo do SIFRA" className="responsive-img"/>
            </div>
            <div className="user">
                <p>Nome do usuário</p>
                <img src={userImg} alt="Foto do usuário"/>
            </div>
        </div>
    );
}
