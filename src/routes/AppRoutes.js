import { Routes, Route } from 'react-router-dom';

import HomeLayout from '../layouts/HomeLayout';
import LoginPage from '../auth/LoginPage';
import RegisterPage from '../auth/RegisterPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;