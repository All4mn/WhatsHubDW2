import { useState } from 'react'
import './App.css'
import Cabecalho from './components/cabecalho/Cabecalho.jsx'
import Secao from './components/secao/Secao.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Cabecalho/>
        <Secao/>
      </div>
    </>
  )
}

export default App
