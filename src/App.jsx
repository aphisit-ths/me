import './App.css';
import React, { useState, useEffect, useRef } from 'react';
//Pages
import IntroPage from './components/intro';
import Navbar from './components/nav';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <IntroPage />
    </div>
  );
}

export default App;
