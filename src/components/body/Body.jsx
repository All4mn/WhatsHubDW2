import styles from "./Body.module.css";
import SalvarContato from "../salvarContato/SalvarContato";
import Contatos from "../contatos/Contatos";
import PrepararMensagem from "../prepararMensagem/PrepararMensagem";
import { useState } from "react";
import Cabecalho from "../cabecalho/Cabecalho";

export default function Body() {
  const [contatos, setContatos] = useState([]);
  const [numeroContato, setNumeroContato] = useState("");
  const [clicouMensagem, setClicouMensagem] = useState(false);
  const [triggerEdit, setTriggerEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const formatacao = (numero) => {
    const num = numero;
    if (num.length == 9) {
      return num.replace(
        /(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/,
        "($1) $2 $3 $4 $5"
      );
    }
    if (num.length == 10) {
      return num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
    if (num.length == 11) {
      return num.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }

    return num;
  };

  return (
    <>
      <div className={styles.container}>
        {/* <Cabecalho/> */}
        <div className={styles.secaoum}>
          <PrepararMensagem
            contatos={contatos}
            formatacao={formatacao}
            numeroContato={numeroContato}
            setClicouMensagem={setClicouMensagem}
            clicouMensagem={clicouMensagem}
          />

          <SalvarContato
            setContatos={setContatos}
            contatos={contatos}
            formatacao={formatacao}
            setNumeroContato={setNumeroContato}
            setClicouMensagem={setClicouMensagem}
            editId={editId}
            setEditId={setEditId}
            triggerEdit={triggerEdit}
            setTriggerEdit={setTriggerEdit}
          />
        </div>

        <Contatos
          setContatos={setContatos}
          contatos={contatos}
          formatacao={formatacao}
          setNumeroContato={setNumeroContato}
          setClicouMensagem={setClicouMensagem}
          editId={editId}
          setEditId={setEditId}
          triggerEdit={triggerEdit}
          setTriggerEdit={setTriggerEdit}
        />
      </div>
    </>
  );
}
