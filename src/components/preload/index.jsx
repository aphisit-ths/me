import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./preload.scss";
const text = ["A", "P", "H", "I", "S", "I", "T"];
function Preload() {
  const variants = {
    circle: {
      scale:[0,50],
      opacity:[0,1]
    },
  };
  return (
    <motion.div className="container">
      <div className="set-text">
        <motion.div
          variants={variants}
          animate={"circle"}
          className="circle"
          transition={{duration:2}}
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
