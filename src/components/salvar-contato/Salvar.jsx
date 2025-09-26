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
    if (novoContato.numero.length != 11) {
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
        <div>
          <p>Nome</p>
          <input
            type="text"
            placeholder="Nome do contato"
            value={novoContato.nome}
            onChange={(e) => setNovoContato({ ...novoContato, nome: e.target.value })}
          />
        </div>
        <div>
          <p>país</p>
          <select value={novoContato.pais} 
          onChange={e => setNovoContato({ ...novoContato, pais: e.target.value })}>
              <option value="">Selecione o país</option>
              <option value="55">Brasil</option>
              <option value="">(Mais opções futuramente)</option>

          </select>
          
        </div>
        <div>
          <p>Número</p>
          <input
            type="text"
            placeholder="Número"
            value={novoContato.numero}
            onChange={(e) => {
              const filtroNumero = e.target.value.replace(/\D/g, "")
              setNovoContato({...novoContato, numero: filtroNumero})}}
          />
        </div>
      </section>
      <button className={styles.salvar_na_agenda} type="submit">Salvar na Agenda</button>
    </form>
  );
}
