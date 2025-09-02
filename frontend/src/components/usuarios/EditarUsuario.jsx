//import { useState } from "react";

function EditarUsuario({ edit, setMudou, mudou }) {
    const handleDelete = (idProduto, idUser) => {
      console.log(idProduto, idUser)
      // faz o delete da compra nessa funçao, precisa pensar um jeito de fazer mudar os estados quando deletar ou quando mexer nos produtos, ainda n ta feito isso
      setMudou(!mudou);
  };

    return(
        <div>
          <h2>Lista de produtos do usuário {edit.nome}</h2>
          {edit.produtos.length === 0 ? (
            <p>Nenhum produto cadastrado.</p>
          ) : (
            <ul>
              <li><strong>ID Nome Preço Opções</strong></li>
              {edit.produtos.map((produto) => (
                <li key={produto.id}>
                  {produto.id + " " + produto.nome + " " + produto.preco}
                  <button onClick={() => handleDelete(produto.id, edit.id)}>Deletar</button>
                </li>
              ))}
            </ul>
          )}
        </div>
    )
}
export default EditarUsuario;