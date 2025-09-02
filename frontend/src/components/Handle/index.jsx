import  Usuarios from '../usuarios'
import  Produtos from '../produtos'
import { useState } from 'react';

function Handle() {
  const [mudou, setMudou] = useState(true);
  return (
    <>
      <h1>Lista de compras por usuário</h1>
      <div className="conteudo">
        <Usuarios mudou={mudou} setMudou={setMudou} />
        <Produtos mudou={mudou} setMudou={setMudou} />
      </div>
    </>
  )
}

export default Handle
