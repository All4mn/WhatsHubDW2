import styles from "./Abrir-conversa.module.css";

export default function Compartilhar({link}) {
  const handleCopy = ()=>{
    navigator.clipboard.writeText(link)
    e.preventDefault()
  }

  const handleRedirect = (e)=>{
    window.open(`${link}`,'_blank')
    e.preventDefault()
  }

  const LinkCopiado = (e) =>{
    e.preventDefault()
    alert("Link copiado!")
  }

  return (
    <div>
      <section className={styles.link_container}>
        <p>Link gerado:</p>
        <div className={styles.final_link}>
          <input type="text" placeholder="" defaultValue={link}/>
          {/* styles.copiar está vazio */}
          {/* <i className="bi bi-copy" className={styles.copiar} onClick={handleCopy}></i> */}
          <button className={styles.copiar} onClick={handleCopy} onMouseUp={LinkCopiado}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy"  viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>
      </button>
        </div>
        <button className={styles.abrir_whatsapp} onClick={handleRedirect}>Abrir Whatsapp</button>
      </section>
    </div>
  );
}
