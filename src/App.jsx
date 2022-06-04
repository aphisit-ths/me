import './App.css';
import React, { useState, useEffect, useRef } from 'react';
//Pages
import IntroPage from './components/intro';
import Navbar from './components/nav';
import Projects from './components/projects';
import MostlyUsedPage from './components/mostly-used';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <IntroPage />
      <MostlyUsedPage />
      <Projects />
    </div>
  );
}

export default App;
