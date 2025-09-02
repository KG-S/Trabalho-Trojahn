import { useEffect, useState } from "react";
import EditarProdutos from "./EditarProduto";

function ListarProdutos({ mudou, setMudou }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
        setLoading(false);
      });
  }, [mudou]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/produtos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao deletar produto");
        }
        return res.json();
      })
      .then(() => {
        console.log("Produto deletado:", id);
        setMudou(!mudou); 
      })
      .catch((err) => {
        console.error("Erro ao deletar produto:", err);
      });
  };

  const handleEdit = ({id, nome, preco}) => {
    setEdit({id, nome, preco});
  };

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div>
      {edit && <EditarProdutos edit={edit} setEdit={setEdit} mudou={mudou} setMudou={setMudou} />}
      <h2>Lista de Produtos</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          <li><strong>ID Nome Preço Opções</strong></li>
          {produtos.map((produto) => (
            <li key={produto.id}>
              {produto.id} - {produto.nome} - R$ {produto.preco.toFixed(2)}{" "}
              <button onClick={() => handleDelete(produto.id)}>Deletar</button>
              <button onClick={() => handleEdit({id: produto.id, nome: produto.nome, preco: produto.preco})}>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListarProdutos;
