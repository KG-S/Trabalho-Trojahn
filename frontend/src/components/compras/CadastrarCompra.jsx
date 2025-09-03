import { useState } from "react";

function CadastrarCompra({ mudou, setMudou }) {
  const [idProduto, setIdProduto] = useState("");
  const [idUsuario, setIdUsuario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const idProdInt = parseInt(idProduto);
    const idUserInt = parseInt(idUsuario);
    
    
    setIdProduto("");
    setIdUsuario("");

    fetch("http://localhost:3000/compras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_produto: idProdInt,
        id_usuario: idUserInt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMudou(!mudou);
      })
      .catch((err) => {
        console.error("Erro ao cadastrar compra:", err);
      });
  };

  return (
    <>
      <h1>Cadastrar Compra</h1>
      <form onSubmit={handleSubmit}>
        <label>Usuário</label>
        <input
          type="number"
          value={idUsuario}
          onChange={(e) => setIdUsuario(e.target.value)}
          placeholder="Digite o ID do usuário"
        />
        <label>Produto</label>
        <input
          type="number"
          value={idProduto}
          onChange={(e) => setIdProduto(e.target.value)}
          placeholder="Digite o ID do produto"
        />
        <button type="submit">Cadastro</button>
      </form>
    </>
  );
}

export default CadastrarCompra;
