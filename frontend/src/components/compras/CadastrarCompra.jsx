import { useState } from "react";

function CadastrarCompra({ mudou, setMudou }) {
  const [id_produto, setIdProduto] = useState("");
  const [id_usuario, setIdUsuario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var idProdInt = parseInt(id_produto)
    var idUserInt = parseInt(id_usuario)
    fetch("http://localhost:3000/compras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_produto: idProdInt, id_usuario: idUserInt }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMudou(!mudou);
      })
      .catch((err) => {
        console.error("Erro ao buscar compras:", err);
      });
  };

  return (
    <>
        <h1>Cadastrar Compra</h1>
        <form onSubmit={handleSubmit}>
          <label>Id do Usuário</label>
          <input
            type="number"
            value={id_usuario}
            onChange={(e) => setIdUsuario(e.target.value)}
            placeholder="Digite o id"
          />
          <label>Id do Produto</label>
          <input
            type="number"
            value={id_produto}
            onChange={(e) => setIdProduto(e.target.value)}
            placeholder="Digite o id"
          />
          <button type="submit">Cadastro</button>
        </form>
    </>
  ) 
}

export default CadastrarCompra
