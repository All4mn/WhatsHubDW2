import styles from "./Gerador.module.css";
import Criar from "../criar-link/Criar";
import AbrirConversa from "../abrir-zapzap/Abrir-conversa";

export default function Gerador() {
  return (
    <div>
      <section className={styles.gerador}>
        <Criar/>
        <AbrirConversa/>
      </section>
    </div>
  );
}
