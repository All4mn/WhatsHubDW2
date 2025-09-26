import styles from "./Secao.module.css";
import Agenda from "../agenda-de-contatos/Agenda";
import Gerador from "../gerador-de-links/Gerador";

export default function Secao() {
  return (
    <>
      <div className={styles.container}>
        <Gerador/>
        <Agenda/>
      </div>
    </>
  );
}