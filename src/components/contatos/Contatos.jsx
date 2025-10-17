import styles from "./Contatos.module.css";
import { supabase } from "../../supabase";
import { useEffect, useState, useMemo } from "react";

export default function Contatos(props) {
  const [carregando, setCarregando] = useState(true);
  const [buscaNome, setBuscaNome] = useState("");

  //buscar dados no supabase para o primeiro carregamento
  useEffect(() => {
    fetchContatos();
  }, []); // <-- array vazio garante que roda só uma vez ao montar

  const fetchContatos = async () => {
    try {
      setCarregando(true);

      let { data: contatos, error } = await supabase
        .from("contatos")
        .select("*");

      if (error) throw error;

      props.setContatos(contatos);
    } catch (error) {
      alert(error.message)
    } finally {
      setCarregando(false);
    }
  };

  const deleteContato = async (id) => {
    if (!confirm("Tem certeza que deseja deletar este contato?")) {
      return;
    }

    try {
      const { error } = await supabase
        .from("contatos")
        .delete()
        .eq("id", id);

      if (error) throw error;

      props.setContatos((prevContatos) =>
        prevContatos.filter((contato) => contato.id !== id)
      );
    } catch (error) {
      alert(error.message);
    }
  }

  const handlePesquisa = (e) => setBuscaNome(e.target.value);

  // lista filtrada por busca (case-insensitive)
  const resultados = useMemo(() => {
    const q = (buscaNome || "").trim().toLowerCase();
    if (!q) return props.contatos || [];
    return (props.contatos || []).filter((c) =>
      (c.nome || "").toLowerCase().includes(q)
    );
  }, [props.contatos, buscaNome]);

  
  return (
    <div className={styles.lista}>
      <h2 className={styles.titulo}>Agenda de contatos</h2>
      {/* fazer css */}

      <h4>Seus contatos ({props.contatos.length})</h4>

      <div>
        <input type="text" 
        className={styles.pesquisa}
        placeholder="Pesquisar contato pelo nome"
        value={buscaNome}
        onChange={handlePesquisa} />
      </div>

      <section className={styles.contatos}>
        {carregando ? (
          <p>Carregando contatos...</p>
        ) : (
          <div className={styles.dados}>
            {resultados.map((contato) => (
              <div className={styles.container} key={contato.id}>
                <div className={styles.info}>
                  <span>{contato.nome}</span>
                  <p>{contato.pais}{`${props.formatacao(contato.numero)}`}</p>
                </div>

                <div className={styles.icons}>

                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" onClick={() =>{
                  props.setNumeroContato(contato.numero)
                  props.setClicouMensagem(true)
                  }} > 
                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/>
                  </svg>
          
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" onClick={()=>{
                    props.setTriggerEdit(true)
                    props.setEditId(contato.id)
                  }}>
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>
                  
                  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" onClick={() => deleteContato(contato.id)}>
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}