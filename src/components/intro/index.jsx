import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./intro.scss";
function IntroPage() {

  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col bg-slate-50">
      <h2 className="font-bold text-lg">APHISIT THUPSAENG</h2>
      <h1 className="">APHISIT THUPSAENG</h1>
    </div>
  );
}

export default IntroPage;
