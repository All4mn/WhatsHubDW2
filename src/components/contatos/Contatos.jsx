import styles from "./Contatos.module.css"

export default function Contatos(){
    return(
        <div>
            <h4>Seus contatos(1)</h4>

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
    )
}