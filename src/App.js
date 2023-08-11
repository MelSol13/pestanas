import logo from './logo.svg';
import './App.css';
import Tabs from './componentes/Tabs'
import { useState } from 'react';

function App() {
  const[tabs, setTabs] = useState([
    {
      etiqueta: "Pestaña 1",
      contenido: "Contenido pestaña 1",
      seleccionada: true
    },
    {
      etiqueta: "Pestaña 2",
      contenido: "Contenido pestaña 2",
      seleccionada: false
    }
  ]);


  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs = {setTabs}/>
    </div>
  );
}

export default App;
