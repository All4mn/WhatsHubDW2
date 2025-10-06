import styles from "./Salvar.module.css";
import { supabase } from "../../supabase";
import { useState } from "react";

export default function Salvar(props) {
  const [novoContato, setNovoContato] = useState({ nome: "", numero: "", pais:"" });

  const addContato = async (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário.

    if (!novoContato.nome.trim() || !novoContato.numero.trim() || !novoContato.pais.trim()) {
      alert("Preencha todos os campos");
      return;
    }
    if (novoContato.numero.length < 9 || novoContato.numero.length >= 12) {
      alert("Preencha com um número válido");
      return;
    }
    
    try {
      const { data , error } = await supabase
        .from("contatos")
        .insert([{ nome: novoContato.nome, numero: novoContato.numero, pais: novoContato.pais }])
        .select()
        .single(); // .single() para pegar o objeto diretamente

      if (error) throw error;

      setNovoContato({ nome: "", numero: "", pais:"" });
      props.atualizarLista([data, ...props.contatos])

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={addContato}>
      <section className={styles.agenda_container}>
        <div className={styles.nome}>
          <p>Nome</p>
          <input
            type="text"
            placeholder="Nome do contato"
            value={novoContato.nome}
            onChange={(e) => setNovoContato({ ...novoContato, nome: e.target.value })}
          />
        </div>
        <div className={styles.pais}>
          <p>País</p>

          <select  value={novoContato.pais} 
          onChange={e => setNovoContato({ ...novoContato, pais: e.target.value })}>
              <option value="">-</option>
              <option value="55">🇧🇷</option>
              <option value="1">🇺🇸</option>
              <option value="33">🇫🇷</option>

          </select>
          
        </div>
        <div className={styles.numero}>
          <p>Número</p>
          <input
            type="text"
            placeholder="Número"
            value={props.formatacao(novoContato.numero)}
            onChange={(e) => {
              const filtroNumero = e.target.value.replace(/\D/g, "");
              
              setNovoContato({...novoContato, numero: filtroNumero})}}
          />
        </div>
      </section>
      <div className={styles.botao}><button className={styles.salvar_na_agenda} type="submit">Salvar na Agenda</button></div>
    </form>
  );
}
