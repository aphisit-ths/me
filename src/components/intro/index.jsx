import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function IntroPage() {
  //Ref
  const hero1 = useRef(null);
  const hero2 = useRef(null);

  useEffect(() => {
    const animate_obj = {
      duration: 0.7,
      x: -80,
      opacity: 0,
    };
    gsap.to(hero1.current, {
      scrollTrigger: {
        trigger: hero1.current,
        start: 'center 30%',
        scrub: true,
      },
      ...animate_obj,
    });
    gsap.to(hero2.current, {
      scrollTrigger: {
        trigger: hero2.current,
        start: 'center 30%',
        scrub: true,
      },
      ...animate_obj,
      x: 80,
    });
  }, []);

  return (
    <div className='flex w-screen h-screen justify-center items-center flex-col bg-slate-50 relative'>
      <div className='w-full h-full relative p-10'>
        <motion.div
          animate={{ x: [-30, 10, -30] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            type: 'spring',
            stiffness: 500,
          }}
          className={`w-96 h-96 border-minimal border-gray-400  cursor-pointer rounded-full  absolute bottom-20 left-2/4`}
        ></motion.div>
        <motion.div
          animate={{ y: [-30, 10, -30] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            type: 'spring',
            stiffness: 500,
          }}
          className={`w-96 h-96 border-minimal border-gray-400  cursor-pointer rounded-full  absolute bottom-20 left-2/4`}
        ></motion.div>
        <motion.div
          animate={{ y: [-15, 60, -15] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            type: 'spring',
            stiffness: 200,
          }}
          className={`w-96 h-96 border-minimal border-gray-400  cursor-pointer rounded-full hover:bg-green-200  absolute top-60 right-32`}
        ></motion.div>
      </div>
      <div className='w-auto absolute '>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='font-light font-inter text-xl xl:text-2xl'
        >
          Aphisit Thupsaeng{' '}
        </motion.span>
        <motion.h1
          className='font-normal font-inter text-3xl md:text-5xl  xl:text-9xl'
          ref={hero1}
        >
          Software Developer{' '}
        </motion.h1>
        <motion.h1
          className='font-normal font-inter text-3xl md:text-5xl  xl:text-9xl '
          ref={hero2}
        >
          Data Analytic{' '}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className='font-normal font-inter text-xl xl:text-2xl text-gray-500 '
        >
          (Looking for internship)
        </motion.h1>
      </div>
    </div>
  );
}

export default IntroPage;
