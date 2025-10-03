import styles from "./Gerador.module.css";
import Criar from "../criar-link/CriarLink";

export default function Gerador(props) {
  return (
    <div>
      <section className={styles.gerador}>
        <Criar atualizarLista={props.atualizarLista}
        contatos={props.contatos}
        formatacao={props.formatacao}/>
      </section>
    </div>
  );
}
