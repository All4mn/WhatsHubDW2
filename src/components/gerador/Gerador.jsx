import styles from "./Gerador.module.css";
import Criar from "../criar/Criar";

export default function Gerador() {
  return (
    <div>
      <section className={styles.gerador}>
        {/* Componente Criar (dentro de Gerador) */}
        <Criar/>

        {/* Componente Compartilhar (dentro de Gerador) */}
        <section className={styles.link_container}>
          <p>Link gerado:</p>
          <div className={styles.final_link}>
            <input type="text" placeholder="abc123abc123" />
            <button className={styles.copiar}>icon</button>
          </div>
          <button className={styles.abrir_whatsapp}>Abrir Whatsapp</button>
        </section>
      </section>
    </div>
  );
}
