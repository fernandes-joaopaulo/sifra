import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../components/User/User";
import Button from "../../components/Button/Button";
import "./Perfil.css";

export default function Perfil() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  const [email, setEmail] = useState(usuario.email);
  const [telefone, setTelefone] = useState(usuario.telefone);
  const cargo = usuario.perfil;
  const navigate = useNavigate();

  return (
    <div className="flex-container">
      <User username={usuario.nome} image={usuario.image} />
      <form className="perfil-form">
        <div>
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={() => setEmail()}
          />
        </div>
        <div>
          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            value={telefone}
            onChange={() => setTelefone()}
          />
        </div>
        <div>
          <label>Cargo</label>
          <input type="text" name="cargo" value={cargo} editable={false} />
        </div>
      </form>
      <div className="botoes">
        <div onClick={() => navigate(-1)}>
          <Button value={"Voltar"} backgroundColor={"#000"} color={"#fff"} />
        </div>
        <Button value={"Salvar"} color={"#000"} backgroundColor={"#20BF55"} />
      </div>
    </div>
  );
}
