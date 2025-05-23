// src/App.js
import React from 'react';
import './index.css';
import Header from './components/Header/Header'; // Header bileşenini içe aktarıyoruz
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className="App">
        <Header/> {/* Header bileşenini burada kullanıyoruz */}
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
  );
}


export default App;