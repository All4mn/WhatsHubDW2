import styles from "./Contatos.module.css";
import { supabase } from "../../supabase";
import { useEffect, useState } from "react";

export default function Contatos() {
  const [contatos, setContatos] = useState([]);
  const [carregando, setCarregando] = useState(true);

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

      setContatos(contatos);
    } catch (error) {
      alert(error.message)
    } finally {
      setCarregando(false);
    }
  };

  // const editContato = async (id) => {
  //   try{
         
  //   }
  // }

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

      setContatos((prevContatos) =>
        prevContatos.filter((contato) => contato.id !== id)
      );
    } catch (error) {
      alert(error.message);
    }
  }
  
  return (
    <div>
      <h4>Seus contatos(1)</h4>

      <section className={styles.contatos}>
        {carregando ? (
          <p>Carregando contatos...</p>
        ) : (
          <div className={styles.dados}>
            {contatos.map((contato) => (
              <div>
                <p key={contato.id}>
                  {contato.nome}<br/>
                  {contato.numero}
                 </p>

                <button>Mensagem</button>
                <button>Editar</button>
                <button onClick={() => deleteContato(contato.id)}>Icon(excluir)</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}