import { useState } from 'react'
import './App.css'
import ComponenteH1 from './components/ComponenteH1.jsx'
import ListaUsuarios from './components/ListaUsuarios.jsx'
import Usuario from './components/Usuario.jsx'

function App() {
  const [count, setCount] = useState(0)

  // Defino un objeto en JS
  const usuario={nombre:"Julián", edad:43};
  
  return (
    <ComponenteH1 nombre="Julián"/>
    // <ListaUsuarios/>
    <Usuario info={usuario}/>
  )
}

export default App