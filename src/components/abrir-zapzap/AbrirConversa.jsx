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

  return (
    <div>
      <section className={styles.link_container}>
        <p>Link gerado:</p>
        <div className={styles.final_link}>
          <input type="text" placeholder="" value={link}/>
          {/* styles.copiar está vazio */}
          <button className={styles.copiar} onClick={handleCopy}>icon</button>
        </div>
        <button className={styles.abrir_whatsapp} onClick={handleRedirect}>Abrir Whatsapp</button>
      </section>
    </div>
  );
}
