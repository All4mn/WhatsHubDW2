import styles from "./Salvar.module.css";

export default function Salvar() {
  return (
    <div>
      <section className={styles.agenda_container}>
        <div>
          <p>Nome</p>
          <input type="text" placeholder="Nome" />
        </div>
        <div>
          <p>Numero</p>
          <input type="text" placeholder="Numero" />
        </div>
      </section>
      <button className={styles.salvar_na_agenda}>Salvar na Agenda</button>
    </div>
  );
}
