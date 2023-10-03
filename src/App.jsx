import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="flex">
    <BrowserRouter>
    <div class="transition-width"><Sidebar/></div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
