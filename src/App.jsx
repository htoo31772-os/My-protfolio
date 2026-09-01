import './App.css';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skill';
import Contact from './components/contact';
import Navbar from './components/navbar';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/feature';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      Aos.init({ duration: 1000 })
    }, 2000);
  }, [])
  if (loading) {
    return (
      <div className="loader-container position-absolute start-50 top-50 translate-middle text-center">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h5 className="mt-3 text-primary tracking-wider">PREPARING PORTFOLIO...</h5>
      </div>
    );
  }
  return (
    <div className='portfolio-app'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
