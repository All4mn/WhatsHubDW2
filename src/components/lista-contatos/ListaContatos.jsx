import styles from "./ListaContatos.module.css";
import Contatos from "../contatos/Contatos";
import { useState } from "react";

export default function Agenda(props) {
  const [triggerEdit, setTriggerEdit] = useState(false)
  const [editId, setEditId] = useState("")

  return (
    <div>
      <div className={styles.lista}>
        
        <Contatos setContatos={props.setContatos}
        contatos={props.contatos}
        formatacao={props.formatacao}
        setNumeroContato={props.setNumeroContato}
        setClicouMensagem={props.setClicouMensagem}
        setTriggerEdit={setTriggerEdit}
        setEditId={setEditId}/>
      </div>
    </div>
  );
}
