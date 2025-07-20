import "./AuthPages.css";
import Form from "../components/Form/Form";
import hero from "../assets/images/hero-img.png";

export default function RegisterPage() {

    const title = "Nos dê algumas informações para podermos começar:";
    const formData = [
        {label: "Nome", type: "text", name: "nome"},
        {label: "Número de Matrícula", type: "text", name: "matricula"},
        {label: "Curso", type: "text", name: "curso"},
        {label: "Semestre letivo", type: "text", name: "semestre"},
        {label: "Telefone", type: "text", name: "telefone"},
        {label: "E-mail institucional", type: "text", name: "email"},
        {label: "Senha", type: "password", name: "senha"}
    ];
    const button = {onSubmit: "", value: "Solicitar Cadastro"};

    return (
        <>
            <div className='main'>
                <Form title={title} formData={formData} button={button} display={"none"} />
                <img className='hero-img' src={hero} alt="Imagem de fundo" /> 
            </div>
        </>
    );
}