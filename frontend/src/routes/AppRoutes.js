import { Routes, Route } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../auth/LoginPage";
import UsersLayout from "../layouts/UsersLayout";
import Dashboard from "../shared/Dashboard/Dashboard";
import SelecionarDisciplina from "../shared/SelecionarDisciplina/SelecionarDisciplina";
import LancarFrequencia from "../roles/docente/LancarFrequencia/LancarFrequencia";
import Perfil from "../shared/Perfil/Perfil";
import Registro from "../shared/Registro/Registro";
import ConsultarFrequencia from "../roles/discente/ConsultarFrequencia";
import Relatorio from "../roles/coordenador/Relatorio";
import CadastroUsuario from "../roles/admin/Cadastro";
import GerenciarUsuarios from "../roles/admin/GerenciarUsuarios";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route element={<UsersLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/lancarFrequencia"
          element={<SelecionarDisciplina />}
        />
        <Route path="/dashboard/registro" element={<SelecionarDisciplina />} />
        <Route
          path="/dashboard/lancarFrequencia/:turmaId"
          element={<LancarFrequencia />}
        />
        <Route path="/dashboard/registro/:turmaId" element={<Registro />} />
        <Route path="/dashboard/consulta" element={<SelecionarDisciplina />} />
        <Route
          path="/dashboard/consulta/:turmaId"
          element={<ConsultarFrequencia />}
        />
        <Route path="/dashboard/relatorio" element={<SelecionarDisciplina />} />
        <Route path="/dashboard/relatorio/:turmaId" element={<Relatorio />} />
        <Route path="/dashboard/perfil" element={<Perfil />} />
        <Route path="/dashboard/cadastro" element={<CadastroUsuario />} />
        <Route path="/dashboard/gerenciamento" element={<GerenciarUsuarios />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
