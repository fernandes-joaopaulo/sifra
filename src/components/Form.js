import './Form.css';

export default function Form(props) {
    
    return (
        <div className='box'>
            <div className='innerBox'>
                <p className='title'>{props.title}</p>
                <div>
                    {props.formData.map((field) => (
                        <div className='label'>
                            <label>{field.label}</label>
                            <input type={field.type} name={field.name} />
                        </div>
                    ))}
                    <p className='cadastro'><u>Não possui login? Realize seu cadastro.</u></p>
                </div>
                <div className='divBtn'>
                    <input className='btn' type="submit" name="submit" value={props.button.title}/>
                </div>                
            </div>
        </div>
    );
} 