import { HashRouter, Routes, Route } from 'react-router-dom';
import { PortafolioPage } from './pages/Portafolio';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortafolioPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;