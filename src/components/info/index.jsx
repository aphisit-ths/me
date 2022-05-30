import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./info.scss";
function InfoPage() {

  const variants = {
    h1:{
      opacity:[0,1],
      x:[-30,0]
    },
    h2:{
      opacity:[0,1],
      y:[-30,0]
    }
  }
  const { scrollY, scrollX } = useViewportScroll();
  const c1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const me = "https://web.facebook.com/photo/?fbid=5135634849846597&set=a.106111989465600"
  return (
    <div className="info-root">
      <div className="info-section">
        <div className="title">
          <h1 >Tools / Skill</h1>
        </div>
        <div className="personal-info">
          <div className="img-section">
            <img src={me} alt="" />
          </div>
          <div className="info">
            <motion.h1 variants={variants} animate={"h1"} >Experienced Tools / Framework</motion.h1>
            <motion.h2 variants={variants} animate={"h2"} >
              ● <span>JavaScript</span> – Developed application with JavaScript
              framework or library such as ReactJS, NodeJS, GraphQL .{" "}
            </motion.h2>
            <motion.h2 variants={variants} animate={"h2"} >
              ● <span>HTML/SCSS</span> – Implemented responsive layouts concept
              for application with Grid, Flexbox and basic knowledge for CSS
              Library such as TailwindCSS, MaterialUI .
            </motion.h2>
            <motion.h2 variants={variants} animate={"h2"} >
              ● <span>Design Tools </span> – Figma, Adobe XD, Adobe Photoshop,
              Adobe Illustrator Implemented basic knowledge of color rule,
              layers concept and components concept .
            </motion.h2>
            <motion.h2 variants={variants} animate={"h2"} >
              ● <span>Database</span> – MongoDB , SQL
            </motion.h2>
            <motion.h2 variants={variants} animate={"h2"} >
              ● <span>Python Machine Learning Tools</span> Such as sklearn ,
              pandas seaborn or another visualization library.
            </motion.h2>
            <motion.h2 variants={variants} animate={"h2"} >
              ● <span>Others</span> – Another library for web application such
              as Framer Motion, etc.
            </motion.h2>
            <motion.h1 variants={variants} animate={"h1"} >Experienced Programing Skill </motion.h1>
            <motion.h2 variants={variants} animate={"h2"} >● JavaScript (Mostly Used)</motion.h2>
            <motion.h2 variants={variants} animate={"h2"} >● Python</motion.h2>
            <motion.h2 variants={variants} animate={"h2"} >● Java </motion.h2>
            <motion.h2 variants={variants} animate={"h2"} >● C# </motion.h2>

            <motion.h2 className="last-text">
              I’ m a Beginner Full Stack Developer, who’ s thrilled to be
              enterting the Tech field. I have a keen eye for design, and look
              forward to being able to work with you.
            </motion.h2>
          </div>
        </div>
      </div>
      <motion.div style={{ y: c1 }} className="circle-1"></motion.div>
    </div>
  );
}

export default InfoPage;
