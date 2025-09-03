function EditarUsuario({ edit, setMudou, mudou }) {
    const handleDelete = (idProduto, idUser) => {
        fetch(`http://localhost:3000/compras/${idProduto}/${idUser}`, {
            method: "DELETE",
        })
        .then(() => {
            console.log("Compra excluída:", idProduto);
            setMudou(!mudou);
        })
        .catch((err) => {
            console.error("Erro ao excluir compra:", err);
        });
    };

    // Soma dos preços dos produtos
    const precoTotal = edit.produtos.reduce((total, produto) => {
        return total + Number(produto.preco);
    }, 0);

    return (
        <div>
            <h2>Lista de produtos do usuário {edit.nome}</h2>
            {edit.produtos.length === 0 ? (
                <p>Nenhum produto cadastrado.</p>
            ) : (
                <ul>
                    <li><strong>ID Nome Preço Opções</strong></li>
                    {edit.produtos.map((produto) => (
                        <li key={produto.id}>
                            {produto.id + " " + produto.nome + " R$" + Number(produto.preco).toFixed(2)}
                            <button onClick={() => handleDelete(produto.id, edit.id)}>Deletar</button>
                        </li>
                    ))}
                </ul>
            )}

            {edit.produtos.length > 0 && (
                <p><strong>Preço total:</strong> R${precoTotal.toFixed(2)}</p>
            )}
        </div>
    );
}

export default EditarUsuario;
