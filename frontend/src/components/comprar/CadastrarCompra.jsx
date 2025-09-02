import { useState } from "react";

function CadastrarCompra({ mudou, setMudou }) {
  const [id_produto, setId] = useState("");
  const [id_usuario, setIdCliente] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setId("");
    setIdCliente("");
    fetch("http://localhost:3000/compras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_produto, id_usuario }),
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
          <label>Id do Cliente</label>
          <input
            type="number"
            value={id_usuario}
            onChange={(e) => setIdCliente(e.target.value)}
            placeholder="Digite o preço"
          />
          <label>Id do Produto</label>
          <input
            type="number"
            value={id_produto}
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite o preço"
          />
          <button type="submit">Cadastro</button>
        </form>
    </>
  ) 
}

export default CadastrarCompra
