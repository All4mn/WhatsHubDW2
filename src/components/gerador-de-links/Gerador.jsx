import styles from "./Gerador.module.css";
import Criar from "../criar-link/CriarLink";

export default function Gerador() {
  return (
    <div>
      <section className={styles.gerador}>
        <Criar/>
      </section>
    </div>
  );
}
