import "./Layouts.css";

import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header';

const HomeLayout = () => {
  return (
    <>
      <Header/>

        <Outlet />

      <footer>
        <small>&copy; 2025 - SIFRA</small>
      </footer>
    </>
  );
}

export default HomeLayout;