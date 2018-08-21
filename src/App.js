import React, { Component } from 'react';
import './resources/app.scss';
import { TweenLite, Expo, TimelineLite } from 'gsap';
import ScrollMagic from 'scrollmagic'

import Header from './components/layout/header_footer/Header';
import Featured from './components/featured';
import Contact from './components/layout/contact/Contacts';
import About from './components/layout/About-Us/About';
import Services from './components/layout/Pole/Services';
import ParticlesCanvas from './components/layout/header_footer/ParticlesCanvas';





class App extends Component {
  render() {
    return (
      <div className="App" style={{
        height:"1500px"
      }}>
    
        <Header />
        <Featured />
        <About />
        
        <Contact />
      </div>
    );
  }
}

export default App;
