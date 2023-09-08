import { Link } from 'react-router-dom';
import './Nav.styles.css';

function Nav() {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* Insira seu logotipo aqui */}
        <h1>Logo</h1>
      </div>
      <ul className="sidebar-links">
        <li><Link to="/rota1">Rota 1</Link></li>
        <li><Link to="/rota2">Rota 2</Link></li>
        <li><Link to="/rota3">Rota 3</Link></li>
      </ul>
    </div>
  );
}

export default Nav;