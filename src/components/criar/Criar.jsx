import { useState } from "react";
import styles from "./Criar.module.css";
import Compartilhar from "../compartilhar/Compartilhar";



export default function Criar() {
  const [numero, setNumero] = useState("");

  const [mensagem, setMensagem] = useState("");

  const [link, setLink] = useState("");

  const especialCaracters = ["(", ")", "-"];

  let url = `https://wa.me/55${numero
    .split("")
    .filter((char) => !especialCaracters.includes(char))
    .join("")}?text=${mensagem}`;

  const handleChange = (e) => {
    setNumero(
      e.target.value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3")
    );
    console.log(numero);
  };

  const linkGenerator = () => {
    if (numero == "") {
      alert("forneça um numero");
      return;
    }
    else if(numero.length < 14 || numero.length > 14){
      alert('numero invalido')
    } else {
      setLink(url);
      
    }
  };

  return (
    <>
      <div>
        {/* styles.titulo está vazio */}
        <h2 className={styles.titulo}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="bi bi-chat"
            viewBox="0 0 16 16"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
          </svg>{" "}
          Gerador de Links
        </h2>
        <div>
          <p>Numero do Whatsapp</p>
          <input
            type="text"
            placeholder="Número"
            value={numero}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Mensagem(opcional)</p>
          <textarea
            name=""
            id=""
            value={mensagem}
            onChange={(e) => {
              setMensagem(e.target.value);
            }}
            className={styles.msg}
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
        </div>
        <button className={styles.enviar} onClick={linkGenerator}>
          Preparar mensagem{" "}
        </button>
      </div>
      <Compartilhar link={link} />
    </>
  );
}
