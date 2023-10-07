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
      <div class=" sticky transition-width max-sm:pb-16 sm:pl-20"><Sidebar/></div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
