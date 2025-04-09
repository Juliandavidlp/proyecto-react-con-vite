import { useState } from 'react'
import './App.css'
import ComponenteH1 from './components/ComponenteH1.jsx'
import ListaUsuarios from './components/ListaUsuarios.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ComponenteH1 nombre="Julián"/>
    // <ListaUsuarios/>
  )
}

export default App