import './App.css';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useWindowSize } from './utils/hooks/useWindowSize';
//Pages
import IntroPage from './components/intro';
import Navbar from './components/nav';
import Projects from './components/projects';
import MostlyUsedPage from './components/mostly-used';
function App() {
  const appRef = useRef(null);
  const size = useWindowSize();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = {
    ease: 0.1,
    curr: 0,
    prev: 0,
    rounded: 0,
  };

  const setBodyHeight = () => {
    document.body.style.height = `${
      appRef.current.getBoundingClientRect().height
    }px`;
  };

  const smoothScroll = useCallback(() => {
    data.curr = window.scrollY;
    data.prev += (data.curr - data.prev) * data.ease;
    data.rounded = Math.round(data.prev * 100) / 100;
    appRef.current.style.transform = `translateY(-${data.rounded}px)`;
    requestAnimationFrame(() => smoothScroll());
  }, [data]);

  // useEffect(() => {
  //   requestAnimationFrame(() => smoothScroll());
  // }, [smoothScroll]);

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  return (
    <div className='App'>
      <section ref={appRef}>
        <Navbar />
        <IntroPage />
        <MostlyUsedPage />
        <Projects />
      </section>
    </div>
  );
}

export default App;
