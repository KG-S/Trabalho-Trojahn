import CadastrarUsuarios from "./CadastrarUsuarios"
import ListarUsuarios from "./ListarUsuarios"
import './Index.css'

function Usuarios({mudou, setMudou}) {

  return (
    <>
      <div className="usuarios-container">
        <div className="cadastrar-usuario">
          <CadastrarUsuarios mudou={mudou} setMudou={setMudou} />
        </div>
        <div className="listar-usuarios">
          <ListarUsuarios mudou={mudou} setMudou={setMudou} />
        </div>
      </div>
    </>
  );
}


export default Usuarios
