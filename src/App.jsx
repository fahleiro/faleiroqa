import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n/config';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import useMetaTags from './hooks/useMetaTags';

function App() {
  useMetaTags();

  return (
    <Router>
      <div className="decorative-glow glow-top"></div>
      <div className="decorative-glow glow-bottom"></div>
      
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App
