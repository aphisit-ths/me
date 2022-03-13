import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./intro.scss";
function IntroPage() {
  const { scrollY, scrollX } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 400], [0, -150]);
  const img = useTransform(scrollY, [0, 400], [0, -300]);

  const variants = {
    visible: { scale: 1 },
    hidden: {
      scale: 1.2,
    },
    init: {
      opacity: [0, 0.5, 1],
      x: [-20, 0],
    },
    yAnimation: {
      opacity: [1, 0.5, 1],
    },
  };

  const me =
    "https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/275371442_4953293474747403_2344795398102508870_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGxSVFTTxZwXDwAE8luuOvjxmxfAD9ozNTGbF8AP2jM1Lc2tcBhy7paapNJfzvCOXt8NJFPNq64ET0sk7vpBE_2&_nc_ohc=gwgu2EPe1LUAX9da0u0&_nc_zt=23&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT96FQ5zRXnYZ8XTytZxRsPR5hSgM_vquJHbDlE-tlWCOg&oe=622FF7B6";
  return (
    <div className="intro">
      <motion.div  className="image-section">
        <motion.img src={me} alt="my img" />
      </motion.div>
      <div className="info-section">
        <motion.h1
          variants={variants}
          animate={"init"}
          transition={{ duration: 6, ease: "easeOut" }}
        >
          Hi there , I'm <span>Oath </span>
        </motion.h1>
        <motion.h1
          className="std"
          variants={variants}
          animate={"init"}
        >
          a sophomore student at Computer Engineer @KMITL Bangkok
          ,THAILAND
        </motion.h1>
        <motion.h2
          variants={variants}
          animate={"yAnimation"}
          transition={{ repeat: Infinity, duration: 2 }}
          
        >
          I'm looking for a summer internship with posistion{" "}
          <span>
            Software Engineer(Front-end), UX/UI Designer ,Data Anaylst
          </span>
        </motion.h2>
      </div>
    </div>
  );
}

export default IntroPage;
