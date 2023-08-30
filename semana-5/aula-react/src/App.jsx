import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav"
import Rota1 from "./components/Rota1"
import Rota2 from "./components/Rota2"
import Rota3 from "./components/Rota3"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/rota1" element={<Rota1 />} />
        <Route path="/rota2" element={<Rota2 />} />
        <Route path="/rota3" element={<Rota3 />} />
      </Routes>
    </Router>
  );
}

export default App;
