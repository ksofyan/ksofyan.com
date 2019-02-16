import React, { Component } from 'react';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Whyme from './components/Whyme/Whyme';
import Contact from './components/Contact/Contact';
import FooterContent from './components/FooterContent/FooterContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hero />
        <main>
          <About /> 
          <Project />
          <Skills />
          <Whyme />
          <Contact />
        </main>
          <FooterContent />
      </div>
    );
  }
}

export default App;