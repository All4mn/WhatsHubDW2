import styles from "./Secao.module.css";
import Agenda from "../agenda-de-contatos/Agenda";
import Gerador from "../gerador-de-links/Gerador";
import { useState } from "react";

export default function Secao() {
  const [contatos, setContatos] = useState([]);
  const [numeroContato, setNumeroContato] = useState("");
  const [clicouMensagem,setClicouMensagem] = useState(false)

  const formatacao = (numero) => {
    const num = numero
    if (num.length == 9) {
      return num.replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/,"($1) $2 $3 $4 $5");
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
        <Gerador contatos={contatos}
        formatacao={formatacao}
        numeroContato={numeroContato}
        setClicouMensagem={setClicouMensagem}
        clicouMensagem={clicouMensagem}/>

        <Agenda atualizarLista={setContatos}
        contatos={contatos}
        formatacao={formatacao}
        setNumeroContato={setNumeroContato}
        setClicouMensagem={setClicouMensagem}/>
      </div>
    </>
  );
}
