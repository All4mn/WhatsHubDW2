import styles from "./Agenda.module.css";
import Salvar from "../salvar-contato/Salvar";
import Contatos from "../contatos/Contatos";
import { useState } from "react";

export default function Agenda() {
  const [contatos, setContatos] = useState([])


  return (
    <div>
      <div className={styles.agenda}>
        {/* styles.titulo está vazio */}
        <h2 className={styles.titulo}>Agenda de contatos</h2>
        <Salvar atualizarLista={setContatos} contatos={contatos}/>
        <Contatos atualizarLista={setContatos} contatos={contatos}/>      
      </div>
    </div>
  );
}
