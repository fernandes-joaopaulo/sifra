import './App.css';

import SelecionarDisciplina from './shared/SelecionarDisciplina/SelecionarDisciplina';

function App() {

  const disciplinas = [
    {nome: "DCC117 A - Modelagem de Sistemas", cod: "DCC117A"},
    {nome: "DCC117 A - Modelagem de Sistemas", cod: "DCC117A"},
    {nome: "DCC117 A - Modelagem de Sistemas", cod: "DCC117A"},
    {nome: "DCC117 A - Modelagem de Sistemas", cod: "DCC117A"},
  ];

  return (
    <div className='app'>

      <SelecionarDisciplina disciplinas={disciplinas}/>

      <footer>
        <small>&copy; 2025 - SIFRA</small>
      </footer>

    </div>
  );
}

export default App;
