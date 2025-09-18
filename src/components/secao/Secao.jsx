import styles from "./Secao.module.css";
import Gerador from "../gerador/Gerador";

export default function Secao() {
  return (
    <>
      <div className={styles.container}>
        <Gerador/>
        

        {/* componente Agenda */}
        <div className={styles.gerador}>
          <h2 className={styles.titulo}>Agenda de contatos</h2>

          {/* Componente Salvar (dentro de Agenda) */}
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

            {/* Componente Contatos (dentro de Agenda) */}
            <h4>Seus contatos(0)</h4>

            <section className={styles.contatos}>
                <div>
                    <p>Mateus</p>
                    <p>(44) 99921-9153</p>
                </div>
                <button>Mensagem</button>
                <button>Editar</button>
                <button>Icon</button>
            </section>
        </div>
      </div>
    </>
  );
}