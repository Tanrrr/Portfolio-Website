import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import FeaturedProject from './pages/FeaturedProject';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}
