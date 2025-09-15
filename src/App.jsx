import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Secao from './components/Secao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho/>
      <Secao/>
    </>
  )
}

export default App
