import styles from "./Agenda.module.css";
import Salvar from "../salvar/Salvar";
import Contatos from "../contatos/Contatos";

export default function Agenda() {
  return (
    <div>
      <div className={styles.agenda}>
        {/* styles.titulo está vazio */}
        <h2 className={styles.titulo}>Agenda de contatos</h2>
        <Salvar />
        <Contatos/>      
      </div>
    </div>
  );
}
