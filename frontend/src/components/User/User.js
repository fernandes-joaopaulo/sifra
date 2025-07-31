import './User.css';
import icon from "../../assets/icons/editar.png"

export default function User(props){

    return(
        <div className="perfil">
            <img className='perfil-img' src={props.image} alt="Foto do usuário"/>
            <div className='bottom'>
                <p>{props.username}</p>
                <div className="btn-icon" style={{display: `${props.display}`}}>
                   <img src={icon} alt="Ícone"/>
                </div>
            </div>
        </div>
    );
}