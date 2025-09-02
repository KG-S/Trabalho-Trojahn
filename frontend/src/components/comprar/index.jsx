import { useState } from "react";
import CadastrarUsuarios from "./CadastrarUsuarios"
import ListarUsuarios from "./ListarUsuarios"
import './index.css'

function Compras() {
  const [mudou, setMudou] = useState(true);

  return (
    <>
      <div className="compras-container">
        <div className="cadastrar-compra">
          <CadastrarUsuarios mudou={mudou} setMudou={setMudou} />
        </div>
        <div className="listar-compras">
          <ListarUsuarios mudou={mudou} setMudou={setMudou} />
        </div>
      </div>
    </>
  );
}


export default Compras
