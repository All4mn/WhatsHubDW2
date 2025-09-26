import styles from "./Salvar.module.css";
import { supabase } from "../../supabase";
import { useState } from "react";

export default function Salvar() {
  const [novoContato, setNovoContato] = useState({ nome: "", numero: "" });

  const addContato = async (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário.

    // Validação simples
    if (!novoContato.nome.trim() || !novoContato.numero.trim()) {
      alert("Preencha nome e número");
      return;
    }
    if (novoContato.numero.trim() < 11) {
      alert("Preencha um número válido");
      return;
    }
    if (novoContato.numero.trim() > 20) {
      alert("Preencha um número válido");
      return;
    }
    //fazer if caso não coloque numeros no campo numero

    //fazer renderizar quando add um novo contato

    try {
      const { error } = await supabase
        .from("contatos")
        .insert([{ nome: novoContato.nome, numero: novoContato.numero }])
        .select()
        .single(); // .single() para pegar o objeto diretamente

      if (error) throw error;

      setNovoContato({ nome: "", numero: "" });

    } catch (error) {
      alert(error.message || error);
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
          <p>Número</p>
          <input
            type="text"
            placeholder="Número"
            value={novoContato.numero}
            onChange={(e) => setNovoContato({ ...novoContato, numero: e.target.value })}
          />
        </div>
      </section>
      <button className={styles.salvar_na_agenda} type="submit">Salvar na Agenda</button>
    </form>
  );
}
