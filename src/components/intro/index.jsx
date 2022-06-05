import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function IntroPage() {
  //Ref
  const name = useRef(null);
  const hero1 = useRef(null);
  const hero2 = useRef(null);
  const intern = useRef(null);
  const circle = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const hero_section = useRef(null);

  useEffect(() => {
    const animate_obj = {
      duration: 0.3,
      y: 80,
      opacity: 0,
      delay: 0.3,
    };
    const circle_animate = {
      duration: 0.5,
      scale: 0,
      opacity: 0,
      delay: 1,
    };
    //GSAP --> Section
    gsap.to(hero_section.current, {
      scale: 0.5,
      opacity: 0.5,
      y: 200,
      duration: 6,
      ease: 'Power3.easeIn',
      scrollTrigger: {
        trigger: hero_section.current,
        start: 'top 20%',
        scrub: true,
      },
    });
    //GSAP --> Hero
    gsap.from(hero1.current, { ...animate_obj, delay: 1 });
    gsap.from(hero2.current, { ...animate_obj, delay: 1.2 });
    gsap.from(name.current, { ...animate_obj, delay: 0.9 });
    gsap.from(intern.current, { ...animate_obj, delay: 1.2 });

    //GSAP --> Circle
    gsap.from(circle.current, { ...circle_animate, delay: 2 });
    gsap.from(circle2.current, { ...circle_animate, delay: 1.4 });
    gsap.from(circle3.current, { ...circle_animate, delay: 2.5 });
  }, []);

  return (
    <div className='flex w-screen h-screen justify-center items-center flex-col bg-black relative'>
      <div className='w-full h-full relative p-10'>
        <motion.div
          ref={circle}
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
          ref={circle2}
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
          ref={circle3}
          animate={{ y: [-15, 60, -15] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            type: 'spring',
            stiffness: 200,
          }}
          className={`w-96 h-96 border-minimal border-gray-400  cursor-pointer rounded-full  absolute top-60 right-32`}
        ></motion.div>
      </div>
      <div ref={hero_section} className='w-auto absolute '>
        <span
          className='font-semibold font-inter text-blue-700 text-xl xl:text-5xl'
          ref={name}
        >
          Aphisit Thupsaeng{' '}
        </span>
        <h1
          className='font-bold font-inter text-white text-4xl md:text-5xl  xl:text-9xl'
          ref={hero1}
        >
          Software Developer{' '}
        </h1>
        <h1
          className='font-bold font-inter text-white text-4xl md:text-5xl  xl:text-9xl '
          ref={hero2}
        >
          Data Analytic{' '}
        </h1>
        <h1
          ref={intern}
          className='font-normal font-inter text-white text-xl xl:text-2xl '
        >
          (Looking for internship)
        </h1>
      </div>
    </div>
  );
}

export default IntroPage;
