import './AuthPages.css';
import Form from '../components/Form/Form';
import hero from '../assets/images/hero-img.png';
import React from 'react';
import api from '../service/api'

export default function LoginPage() {

    const [usuarios, setUsuarios] = React.useState([{}]);

    React.useEffect(() => {
    api.get('')
        .then((response) => {
        setUsuarios(response.data);
        })
        .catch((error) => {
        console.error('Erro ao carregar usuarios:', error);
        });
    }, []);

    const title = "Olá! Entre ou cadastre-se.";
    const formData = [
        {label: "Login", type: "text", name: "login"},
        {label: "Senha", type: "password", name: "senha"}
    ];
    const button = {onSubmit: "", value: "Entrar"};

    return (
        <>
            <div className='main'>
                <Form title={title} formData={formData} button={button} />
                <img className='hero-img' src={hero} alt="Imagem de fundo" /> 
            </div>
        </>
    );
}