import "./App.css";
import IntroPage from "./components/intro";
import Preload from "./components/preload";
import React, { useState, useEffect, useRef } from "react";
function App() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(1);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <div className="App">
      {preloader ? (
        <Preload />
      ) : (
        <>
          <IntroPage / >
          <IntroPage / >
          
        </>
      )}
    </div>
  );
}

export default App;
