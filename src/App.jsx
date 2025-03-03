import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
// import ParticlesBackground from './components/ParticaleBackground';


function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;