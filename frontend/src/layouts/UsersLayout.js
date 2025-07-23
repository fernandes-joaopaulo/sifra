import "./Layouts.css";

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Navigate } from "react-router-dom";

const UsersLayout = () => {

  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario) {
    return <Navigate to="/" />; // redireciona para a tela de login
  }

  return (
    <>
      <Header username={usuario.nome} image={usuario.image}/>

      <div className="users-layout">
        <Outlet />
      </div>

      <footer>
        <small>&copy; 2025 - SIFRA</small>
      </footer>
    </>
  );
};

export default UsersLayout;
