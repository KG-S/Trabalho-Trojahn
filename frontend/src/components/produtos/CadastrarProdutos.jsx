import { useState } from "react";

function CadastrarProdutos({ mudou, setMudou }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const precoNumber = parseFloat(preco);
    if (!nome || isNaN(precoNumber) || precoNumber <= 0) {
      alert("Preencha todos os campos corretamente. O preço deve ser maior que zero.");
      return;
    }

    fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, preco: precoNumber }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Produto cadastrado:", data);
        setMudou(!mudou); // Atualiza para disparar recarregamento da lista
        setNome("");       // Limpa campo nome
        setPreco("");      // Limpa campo preço
      })
      .catch((err) => {
        console.error("Erro ao cadastrar produto:", err);
      });
  };

  return (
    <>
      <h1>Cadastrar produtos</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome do Produto</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome do produto"
        />
        <label>Preço</label>
        <input
          type="number"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          placeholder="Digite o preço"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

export default CadastrarProdutos;
