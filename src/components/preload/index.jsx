import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./preload.scss";
const text = ["A", "P", "H", "I", "S", "I", "T"];
function Preload() {
  const variants = {
    circle: {
      x: [0,50,100,150,200,250,300,350,400],
      y: [100,0,100,0,100,0,100,0,10],
      scale:[0,1.1,0,1,1.1,1,1.2,1],
      opacity:[0,1]
    },
  };
  return (
    <motion.div className="container">
      <div className="set-text">
        {text.map((text, i) => (
          <>
            <motion.h1
              animate={{
                y: [-16, -i * 5, 0],
                x: [16, i * 5, 0],
                opacity: [0, -i, 1],
              }}
              transition={{ delay: i - i * 0.7  } }
              className="primary-text"
            >
              {text}{" "}
            </motion.h1>
          </>
        ))}
        <motion.div
          variants={variants}
          animate={"circle"}
          className="circle"
          transition={{delay:2 }}
        ></motion.div>
      </div>

      {/* <motion.h1
        variants={variants}
        animate={"yAnimation"}
        transition={{ duration: 3, ease: "easeIn" }}
        className="secondary-text"
      >
        APHISIT
      </motion.h1> */}
    </motion.div>
  );
}

export default Preload;
