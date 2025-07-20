import './Perfil.css';

export default function Perfil(props){

    return(
        <div className="user">
            <img className='user-img' src={props.image} alt="Foto do usuário"/>
            <div className='bottom'>
                <p>{props.username}</p>
                <div className="btn-icon" style={{display: `${props.display}`}}>
                   <img src={props.imageicon} alt="Ícone"/>
                </div>
            </div>
        </div>
    );
}