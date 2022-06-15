import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Pages
import IntroPage from './components/intro';
import Navbar from './components/nav';
import Projects from './components/projects';
import MostlyUsedPage from './components/mostly-used';
import InteractCard from './components/card/interactcard';
import InfoPage from './components/info';
function App() {
  const info = 'https://api.countapi.xyz/info/oatlabs';
  const hit = 'https://api.countapi.xyz/hit/oatlabs';
  const [visitor, setVisitor] = useState(0);
  const getVisitors = async () => {
    try {
      const isVisited = localStorage.getItem('visited');
      /** check if visited ?
       * if not visit add visitor
       * if visited just show info
       */
      console.log(isVisited);
      if (isVisited) {
        const data = await axios.get(info);
        setVisitor(data.data.value);
      } else {
        const addVisit = await axios.get(hit);
        setVisitor(addVisit.data.value);
        localStorage.setItem('visited', true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVisitors();
  }, []);

  return (
    <div className='App'>
      <div id='container'>
        <Navbar visitor={visitor} />
        <IntroPage />
        <InteractCard />
        <InfoPage />

        {/* <MostlyUsedPage /> */}
        <Projects />
      </div>
    </div>
  );
}

export default App;
