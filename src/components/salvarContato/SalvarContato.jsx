import styles from "./SalvarContato.module.css";
import { supabase } from "../../supabase";
import { useEffect, useState } from "react";

export default function SalvarContato(props) {
  const [novoContato, setNovoContato] = useState({
    nome: "",
    numero: "",
    pais: "",
  });
  const [textBotao, setTextBotao] = useState("Salvar na Agenda");
  const [textTitulo, setTextTitulo] = useState("Salvar Contato");

  const mudarText = () => {
    if (props.triggerEdit) {
      setTextBotao("Salvar Edição");
      setTextTitulo("Editar Contato");
      return;
    }
    setTextTitulo("Salvar Contato");
    setTextBotao("Salvar na Agenda");
  };

  const setContato = async () => {
    if (props.triggerEdit) {
      try {
        const { data, error } = await supabase
          .from("contatos")
          .select("*")
          .single()
          .eq("id", props.editId);

        if (error) throw error;

        setNovoContato({
          nome: data.nome,
          numero: data.numero,
          pais: data.pais,
        });
      } catch (error) {
        alert(error.message);
      }
      return;
    }
    setNovoContato({ nome: "", numero: "", pais: "" });
  };

  const editMode = () => {
    setContato();
    mudarText();
  };

  useEffect(editMode, [props.triggerEdit]);

  const addContato = async (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário.

    if (
      !novoContato.nome.trim() ||
      !novoContato.numero.trim() ||
      !novoContato.pais.trim()
    ) {
      alert("Preencha todos os campos");
      return;
    }
    if (novoContato.numero.length < 9 || novoContato.numero.length >= 12) {
      alert("Preencha com um número válido");
      return;
    }

    //edição dos contatos
    if (props.triggerEdit) {
      try {
        const { data, error } = await supabase
          .from("contatos")
          .update([
            {
              nome: novoContato.nome,
              numero: novoContato.numero,
              pais: novoContato.pais,
            },
          ])
          .eq("id", props.editId)
          .select()
          .single();

        if (error) throw error;

        setNovoContato({ nome: "", numero: "", pais: "" });

        props.setContatos((prevContatos) => {
          const filtrado = prevContatos.filter(
            (contato) => contato.id !== props.editId
          );
          return [data, ...filtrado];
        });
      } catch (error) {
        alert(error.message);
      } finally {
        props.setTriggerEdit(false);
      }
      return;
    }

    try {
      const { data, error } = await supabase
        .from("contatos")
        .insert([
          {
            nome: novoContato.nome,
            numero: novoContato.numero,
            pais: novoContato.pais,
          },
        ])
        .select()
        .single(); // .single() para pegar o objeto diretamente

      if (error) throw error;

      setNovoContato({ nome: "", numero: "", pais: "" });
      props.setContatos([data, ...props.contatos]);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.agenda}>
      <h2>{textTitulo}</h2>
      <form onSubmit={addContato}>
        <section className={styles.agenda_container}>
          <div className={styles.nome}>
            <p>Nome</p>
            <input
              type="text"
              placeholder="Nome do contato"
              value={novoContato.nome}
              onChange={(e) =>
                setNovoContato({ ...novoContato, nome: e.target.value })
              }
            />
          </div>
          <div className={styles.pais}>
            <p>País</p>

            <select
              value={novoContato.pais}
              onChange={(e) =>
                setNovoContato({ ...novoContato, pais: e.target.value })
              }
            >
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

                setNovoContato({ ...novoContato, numero: filtroNumero });
              }}
            />
          </div>
        </section>
        <div className={styles.botao}>
          <button className={styles.salvar_na_agenda} type="submit">
            {textBotao}
          </button>
        </div>
      </form>
    </div>
  );
}
