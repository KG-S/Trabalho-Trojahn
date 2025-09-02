import CadastrarProdutos from "./CadastrarProdutos";
import ListarProdutos from "./ListarProdutos";
import './Index.css'

function Produtos({mudou, setMudou}) {
  return (
    <>
      <div className="produtos-container">
        <div className="cadastrar-produto">
          <CadastrarProdutos mudou={mudou} setMudou={setMudou} />
        </div>
        <div className="listar-produtos">
          <ListarProdutos mudou={mudou} setMudou={setMudou} />
        </div>
      </div>
    </>
  );
}

export default Produtos;
