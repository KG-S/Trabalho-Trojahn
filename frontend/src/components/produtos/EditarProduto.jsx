import { useState } from "react";

function EditarProdutos({ edit, setEdit, setMudou, mudou }) {
  const [nome, setNome] = useState(edit.nome);
  const [preco, setPreco] = useState(edit.preco);
  const handleEdit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/produtos/${edit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        preco: parseFloat(preco),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao editar produto");
        }
        return res.json();
      })
      .then(() => {
        console.log("Produto editado:", edit.id);
        setMudou(!mudou);
        setEdit(null);
      })
      .catch((err) => {
        console.error("Erro ao editar produto:", err);
      });
  };

    return(
        <div>
            <h2>Editar Produto</h2>
            <form onSubmit={handleEdit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={nome}
                    onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Preço:</label>
                    <input type="text" name="preco" value={preco} 
                    onChange={(e) => setPreco(e.target.value)}/>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
}
export default EditarProdutos;