import './App.css';
import React, { useEffect, useRef, useCallback, createRef } from 'react';
import locomotiveScroll from 'locomotive-scroll';
//Pages
import IntroPage from './components/intro';
import Navbar from './components/nav';
import Projects from './components/projects';
import MostlyUsedPage from './components/mostly-used';
import InteractCard from './components/card/interactcard';

function App() {
  return (
    <div className='App'>
      <div id='container'>
        <Navbar />
        <IntroPage />
        <InteractCard />
        {/* <MostlyUsedPage /> */}
        <Projects />
      </div>
    </div>
  );
}

export default App;
