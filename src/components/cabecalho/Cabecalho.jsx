import styles  from './Cabecalho.module.css'

export default function Cabecalho(){
    return(
    <>
    <header className={styles.cabecalho}>
        <h1 className={styles.titulo}>WhatsHub</h1>
        <h5 className={styles.subtitulo}>O jeito mais rápido de iniciar conversas pelo Whatsapp. Gere links instantâneos e mantenha seus contatos organizados</h5>
    </header>


    </>

    )

}