import { Routes, Route } from 'react-router-dom';

import HomeLayout from '../layouts/HomeLayout';
import LoginPage from '../auth/LoginPage';
import UsersLayout from "../layouts/UsersLayout";
import Dashboard from "../shared/Dashboard/Dashboard";

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route element={<UsersLayout />}>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;