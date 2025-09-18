import styles from "./Secao.module.css";

export default function Secao() {
  return (
    <>
      <div className={styles.container}>

        {/* Componente Gerador */}
        <section className={styles.gerador}>

          {/* Componente Criar (dentro de Gerador) */}
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

          {/* Componente Compartilhar (dentro de Gerador) */}
          <section className={styles.link_container}>
            <p>Link gerado:</p>
            <div className={styles.final_link}>
            <input type="text" placeholder="abc123abc123"/>
            <button className={styles.copiar}>icon</button>
            </div>
            <button className={styles.abrir_whatsapp}>Abrir Whatsapp</button>

          </section>
        </section>

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
