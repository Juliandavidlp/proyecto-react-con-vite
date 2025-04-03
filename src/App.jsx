import { useState } from 'react'
import './App.css'
import ComponenteH1 from './components/ComponenteH1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ComponenteH1></ComponenteH1>
  )
}

export default App