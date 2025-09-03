import { useState } from "react";
import CadastrarCompra from "./CadastrarCompra"

import './index.css'

function Compras() {
  const [mudou, setMudou] = useState(true);

  return (
    <>
      <div className="compras-container">
        <div className="cadastrar-compra">
          <CadastrarCompra mudou={mudou} setMudou={setMudou} />
        </div>
        
      </div>
    </>
  );
}


export default Compras
