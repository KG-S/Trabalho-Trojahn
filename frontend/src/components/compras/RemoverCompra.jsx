import { useState } from "react";

function ExcluirCompra({ setMudou, mudou }) {
  const [id_usuario, setIdUsuario] = useState("");
  const [id_produto, setIdProduto] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    var idProdInt = parseInt(id_produto)
    var idUserInt = parseInt(id_usuario)
    fetch(`http://localhost:3000/compras/${idProdInt}/${idUserInt}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Compra excluída:", idProdInt);
        setMudou(!mudou);
      })
      .catch((err) => {
        console.error("Erro ao excluír compra:", err);
      });
  };

    return(
        <div>
            <h2>Excluír Compra</h2>
            <form onSubmit={handleEdit}>
                <div>
                    <label>Id do Usuário</label>
                    <input
                    type="number"
                    value={id_usuario}
                    onChange={(e) => setIdUsuario(e.target.value)}
                    placeholder="Digite o id"
                    />
                </div>
                <div>
                    <label>Id do Produto</label>
                    <input
                    type="number"
                    value={id_produto}
                    onChange={(e) => setIdProduto(e.target.value)}
                    placeholder="Digite o id"
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
}
export default ExcluirCompra;