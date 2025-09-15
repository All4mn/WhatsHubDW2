import styles from "./Secao.module.css";

export default function Secao() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gerador}>
          <h2 className={styles.titulo}>Gerador de Links</h2>

          <section>
            <p>Numero do Whatsapp</p>
            <input type="text" />
            <p>Mensagem(opcional)</p>
            <input type="text" name="" id="" />
          </section>
        </div>

        <div className={styles.gerador}>
          <h2 className={styles.titulo}>Agenda de contatos</h2>

          <section className={styles.agenda_container}>
            <div>
              <p>Nome</p>
              <input type="text" />
            </div>
            <div>
              <p>Numero</p>
              <input type="text" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
