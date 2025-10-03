import styles from "./Gerador.module.css";
import CriarLink from "../criar-link/CriarLink";

export default function Gerador(props) {
  return (
    <div>
      <section className={styles.gerador}>

        <CriarLink contatos={props.contatos}
        formatacao={props.formatacao}
        numeroContato={props.numeroContato}
        setClicouMensagem={props.setClicouMensagem}
        clicouMensagem={props.clicouMensagem}/>
      </section>
    </div>
  );
}
