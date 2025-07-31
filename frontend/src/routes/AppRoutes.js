import { Routes, Route } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../auth/LoginPage";
import UsersLayout from "../layouts/UsersLayout";
import Dashboard from "../shared/Dashboard/Dashboard";
import SelecionarDisciplina from "../shared/SelecionarDisciplina/SelecionarDisciplina";
import LancarFrequencia from "../roles/docente/LancarFrequencia/LancarFrequencia";
import Perfil from "../shared/Perfil/Perfil";
import Registro from "../shared/Registro/Registro";

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
        <Route
          path="/dashboard/registro/:turmaId"
          element={<Registro />}
        />
        <Route path="/dashboard/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
