import './Rota3.styles.css';
 
function Rota3() {

  return (
    <div className="rota3">
      <div className='topo'>
        <h2>Unidades Geradoras</h2>
      </div>
      <form action="">
        <label htmlFor="nome">Unidade Geradora</label>
        <select 
          name="unidade" 
          id="unidade"
          value="unidade"
          >
          <option value="1">Unidade 1</option>
          {/* {unidades.map((unidade) => (
            <option value={unidade.id}>{unidade.nome}</option>
          ))} */}
        </select>
        <label htmlFor="">Mes/ano</label>
        <input type="month" name="" id="data"/>
        <label htmlFor="">Total kw gerado</label>
        <button
          type="submit"
          className="btn-cadastrar"
          
        >
          Cadastrar
        </button>
      </form>

    </div>
  );
}

export default Rota3;
