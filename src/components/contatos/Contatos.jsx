import styles from "./Contatos.module.css";
import { supabase } from "../../supabase";
import { useEffect, useState } from "react";

export default function Contatos() {
  const [contatos, setContatos] = useState([]);
  // const [novoContato, setNovoContato] = useState('');
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


  //TERMINAR ESSA FUNÇÃO

  // const formataNumero = (numero) => {
  //   let novoNumero = numero.replace(/\D/g, ""); // Remove tudo que não é dígito
    
  //   if (num.length === 11) {
  //   return `(${num.slice(0,2)}) ${num.slice(2,7)}-${num.slice(7,11)}`;
  // } else if (num.length === 10) {
  //   return `(${num.slice(0,2)}) ${num.slice(2,6)}-${num.slice(6,10)}`;
  // }
  // }

  //----------------------
  
  // addcontatos é em outro componente

  // const addContato = async ()=>{
  //   e.preventDefault(); // Evita que a página recarregue ao enviar o formulário.

  //   try{

  //   }
  // }

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
                <button>Icon</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
