import { useState } from "react";

function CadastrarUsuarios({ mudou, setMudou }) {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNome("");
    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMudou(!mudou);
      })
      .catch((err) => {
        console.error("Erro ao buscar usuários:", err);
      });
  };

  return (
    <>
        <h1>Cadastrar usuario</h1>
        <form onSubmit={handleSubmit}>
          <label>Usuario</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          <button type="submit">Cadastro</button>
        </form>
    </>
  ) 
}

export default CadastrarUsuarios
