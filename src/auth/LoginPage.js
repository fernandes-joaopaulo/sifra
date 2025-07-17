import './AuthPages.css';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import hero from '../assets/images/hero-img.png';

export default function LoginPage() {

    const title = "Olá! Entre ou cadastre-se.";
    const formData = [
        {label: "Login", type: "text", name: "login"},
        {label: "Senha", type: "password", name: "senha"}
    ];
    const button = {onSubmit: "", value: "Entrar"};

    return (
        <>
            <Header display={'none'}/>
            <div className='main'>
                <Form title={title} formData={formData} button={button} />
                <img className='hero-img' src={hero} alt="Imagem de fundo" /> 
            </div>
        </>
    );
}