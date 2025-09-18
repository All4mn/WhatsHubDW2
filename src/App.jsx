import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './components/cabecalho/Cabecalho.jsx'
import Secao from './components/secao/Secao.jsx'

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
