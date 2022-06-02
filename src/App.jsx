import './App.css';
import React, { useState, useEffect, useRef } from 'react';
//Pages
import IntroPage from './components/intro';
import Navbar from './components/nav';
import Projects from './components/projects';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <IntroPage />
      <Projects />
    </div>
  );
}

export default App;
