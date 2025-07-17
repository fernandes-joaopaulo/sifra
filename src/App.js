import './App.css';
import Dashboard from "./users/Dashboard";

import icon1 from "./assets/icons/check-list.png";
import icon2 from "./assets/icons/consulta.png";
import icon3 from "./assets/icons/info.png";
import icon4 from "./assets/icons/alunos.png";

function App() {

  const cards = [
    {label: "Lançar Frequência", icon: icon1},
    {label: "Consultar Frequência", icon: icon2},
    {label: "Minhas informações", icon: icon3},
    {label: "Registro de alunos", icon: icon4}
  ];

  return (
    <div className='app'>
      <Dashboard cards={cards} username={"Alessandra"}/>
    </div>
  );
}

export default App;
