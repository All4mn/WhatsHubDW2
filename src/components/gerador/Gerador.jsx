import styles from "./Gerador.module.css";
import Criar from "../criar/Criar";
import Compartilhar from "../compartilhar/Compartilhar";

export default function Gerador() {
  return (
    <div>
      <section className={styles.gerador}>
        <Criar/>
        {/* <Compartilhar/> */}
      </section>
    </div>
  );
}
