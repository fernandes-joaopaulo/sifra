import './Perfil.css';

export default function Perfil(props){

    return(
        <div className="user" style={{display: `${props.display}`}}>
            <img src={props.image} alt="Foto do usuário"/>
            <div className='bottom'>
                <p>{props.username}</p>
                <div className="btn">
                   <img src={props.icon} alt="Ícone"/>
                </div>
            </div>
        </div>
    );
}