import styles from "./Secao.module.css";
import Gerador from "../gerador/Gerador";
import Agenda from "../agenda/Agenda";

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