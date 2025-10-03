import styles from "./Agenda.module.css";
import Salvar from "../salvar-contato/Salvar";
import Contatos from "../contatos/Contatos";

export default function Agenda(props) {

  return (
    <div>
      <div className={styles.agenda}>

        {/* styles.titulo está vazio */}
        <h2 className={styles.titulo}>Agenda de contatos</h2>

        <Salvar atualizarLista={props.atualizarLista}
        contatos={props.contatos}
        formatacao={props.formatacao}/>
        
        <Contatos atualizarLista={props.atualizarLista}
        contatos={props.contatos}
        formatacao={props.formatacao}
        setNumeroContato={props.setNumeroContato}
        setClicouMensagem={props.setClicouMensagem}/>      
      </div>
    </div>
  );
}
