import  Usuarios from '../usuarios'
import  Produtos from '../produtos'
import Compras from '../compras'
import { useState } from 'react';

function Handle() {
  const [mudou, setMudou] = useState(false);

  return (
    <>
      <h1>Lista de compras por usuário</h1>
      <div className="conteudo">
        <Usuarios mudou={mudou} setMudou={setMudou} />
        <Produtos mudou={mudou} setMudou={setMudou} />
        <Compras mudou={mudou} setMudou={setMudou} />
      </div>
    </>
  )
}

export default Handle
