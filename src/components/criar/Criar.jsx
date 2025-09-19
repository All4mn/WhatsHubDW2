import styles from "./Criar.module.css";

export default function Criar() {
  return (
    <div>
      {/* styles.titulo está vazio */}
      <h2 className={styles.titulo}>Gerador de Links</h2>
      <div>
        <p>Numero do Whatsapp</p>
        <input type="text" placeholder="Número" />
      </div>
      <div>
        <p>Mensagem(opcional)</p>
        <textarea
          name=""
          id=""
          className={styles.msg}
          placeholder="Digite sua mensagem aqui..."
        ></textarea>
      </div>
      <button className={styles.enviar}>Preparar mensagem</button>
    </div>
  );
}
