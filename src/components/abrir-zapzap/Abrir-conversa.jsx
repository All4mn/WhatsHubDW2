import styles from "./Abrir-conversa.module.css";

export default function AbrirConversa() {
  return (
    <div>
      <section className={styles.link_container}>
        <p>Link gerado:</p>
        <div className={styles.final_link}>
          <input type="text" placeholder="abc123abc123" />
          {/* styles.copiar está vazio */}
          <button className={styles.copiar}>icon</button>
        </div>
        <button className={styles.abrir_whatsapp}>Abrir Whatsapp</button>
      </section>
    </div>
  );
}
