import "./Rota3.styles.css";

function Rota3() {
  return (
    <div className="rota3">
      <div className="topo">
        <h2>Lançamento de geração mensal</h2>
      </div>
      <div className="formulario">
        <form>
          <div className='unidade-geradora'>
            <label>Unidade Geradora</label>
            <select name="unidade" id="unidade" value="unidade">
              <option value="1">Unidade 1</option>
            </select>
          </div>
          <div>
            <label>Mes/ano</label>
            <input type="month" name="" id="data" />
          </div>
          <div>
            <label>Total kw gerado</label>
            <input type="number" name="total" id="kw" />
          </div>
          <button type="submit" className="btn-cadastrar">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Rota3;
