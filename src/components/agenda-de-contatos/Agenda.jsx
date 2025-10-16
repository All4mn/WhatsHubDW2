import styles from "./Agenda.module.css";
import Salvar from "../salvar-contato/Salvar";
// import Contatos from "../contatos/Contatos";
import { useState } from "react";

export default function Agenda(props) {
  const [triggerEdit, setTriggerEdit] = useState(false)
  const [editId, setEditId] = useState("")

  return (
    <div>
      <div className={styles.agenda}>

        {/* styles.titulo está vazio */}
        <h2 className={styles.titulo}>Agenda de contatos</h2>

        <Salvar setContatos={props.setContatos}
        contatos={props.contatos}
        formatacao={props.formatacao}
        triggerEdit={triggerEdit}
        setTriggerEdit={setTriggerEdit}
        editId={editId}/>
        
        {/* <Contatos setContatos={props.setContatos}
        contatos={props.contatos}
        formatacao={props.formatacao}
        setNumeroContato={props.setNumeroContato}
        setClicouMensagem={props.setClicouMensagem}
        setTriggerEdit={setTriggerEdit}
        setEditId={setEditId}/> */}
      </div>
    </div>
  );
}
