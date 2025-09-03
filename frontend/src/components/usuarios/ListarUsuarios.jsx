import { useEffect, useState } from "react";
import EditarUsuario from "./EditarUsuario";

function ListarUsuarios({ mudou, setMudou }) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(null);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/usuarios/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao deletar usuário");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Usuário deletado:", data);
        setMudou(!mudou); 
      })
      .catch((err) => {
        console.error("Erro ao deletar usuário:", err);
      });
  };

  useEffect(() => {
    console.log("useEffect disparado");
    fetch("http://localhost:3000/usuarios")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
        setEdit(null);
      })
      .catch((err) => {
        console.error("Erro ao buscar usuários:", err);
        setLoading(false);
      });
  }, [mudou]);

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  return (
    <div>
      {edit && <EditarUsuario edit={edit} setEdit={setEdit} mudou={mudou} setMudou={setMudou} />}
      <h2>Lista de Usuários</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        <ul>
          <li><strong>ID Nome Produtos Total compras Opções</strong></li>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.id + " " + usuario.nome}
              <button onClick={() => handleDelete(usuario.id)}>Deletar</button>
              <button onClick={() => setEdit({id: usuario.id, nome: usuario.nome, produtos: usuario.produtos})}>Produtos</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ListarUsuarios;