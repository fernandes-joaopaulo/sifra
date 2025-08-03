import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Perfil.css";
import icon from "../../assets/icons/editar.png";
import api from "../../service/api";

export default function Perfil() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const [nome, setNome] = useState(usuario.nome);
  const [email, setEmail] = useState(usuario.email);
  const [telefone, setTelefone] = useState(usuario.telefone);
  const [image, setImage] = useState(usuario.image);
  const cargo = usuario.perfil;
  const [isEditable, setIsEditable] = useState(false);

  const navigate = useNavigate();

  const alternarEdicao = () => {
    setIsEditable((prevIsEditable) => !prevIsEditable);
  };

  async function salvar() {
    try {
      const user = await api.get("/usuario", { params: { id: usuario.id } });
      user.data.nome = nome;
      user.data.email = email;
      user.data.telefone = telefone;
      user.data.image = image;
      switch (usuario.perfil) {
        case "docente":
          await api.post("/usuario/save/docente", user.data);
          break;
        case "discente":
          await api.post("/usuario/save/discente", user.data);
          break;
        case "coordenador":
          await api.post("/usuario/save/coordenador", user.data);
          break;
        default:
          console.log("Perfil não encontrado");
      }
      console.log("Usuario salvo com sucesso.");
      alert(
        "Salvo com sucesso! Você será redirecionado para a tela de login para que seus dados sejam atualizados."
      );
      handleLogout();
    } catch (error) {
      console.log("Erro ao salvar usuario.");
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  return (
    <div className="flex-container">
      <div className="perfil">
        <img className="perfil-img" src={usuario.image} alt="Foto do usuário" />
        <div className="bottom">
          <input
            className="editable-input"
            type="text"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            readOnly={!isEditable}
            disabled={!isEditable}
          />
          <div className="btn-icon" onClick={alternarEdicao}>
            <img src={icon} alt="Ícone" />
          </div>
        </div>
      </div>
      <form className="perfil-form">
        <div>
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!isEditable}
            disabled={!isEditable}
          />
        </div>
        <div>
          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            readOnly={!isEditable}
            disabled={!isEditable}
          />
        </div>
        <div>
          <label>Cargo</label>
          <input
            type="text"
            name="cargo"
            defaultValue={cargo}
            readOnly={true}
            disabled={true}
          />
        </div>
        <div>
          <label>URL da imagem</label>
          <input
            type="text"
            name="imagem"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            readOnly={!isEditable}
            disabled={!isEditable}
          />
        </div>
      </form>
      <div className="botoes">
        <div onClick={() => navigate(-1)}>
          <Button value={"Voltar"} backgroundColor={"#000"} color={"#fff"} />
        </div>
        <div onClick={salvar}>
          <Button value={"Salvar"} color={"#000"} backgroundColor={"#20BF55"} />
        </div>
      </div>
    </div>
  );
}
