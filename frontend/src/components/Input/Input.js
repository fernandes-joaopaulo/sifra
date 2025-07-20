import './Input.css'

export default function Input(props) {

    return(
        <>
            <label>{props.label}</label>
            <input 
                className='campo'
                type={props.type} 
                name={props.name} 
                placeholder={props.label}
            />
        </>
    );
}