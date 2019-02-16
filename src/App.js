import React, { Component } from 'react';
import Hero from './components/Hero/Hero';
// import Portfolio from './components/Portfolio';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import FooterContent from './components/FooterContent/FooterContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hero />
        <main>
          <About /> 
          <Skills />
        </main>
          <FooterContent />
      </div>
    );
  }
}

export default App;