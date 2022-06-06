import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function InteractCard() {
  const purple = useRef(null);
  const black = useRef(null);

  useEffect(() => {
    gsap.from(black.current, {
      x: 400,
      scrollTrigger: {
        trigger: black.current,
        scrub: true,
        start: 'top 90%',
        end: 'center 30%',
      },
    });
  }, []);

  return (
    <div className='w-full px-1 md:px-10  h-screen flex flex-row justify-center items-center align-middle relative'>
      <div
        ref={black}
        className='flex xl:w-2/3 bg-secondblack-0 h-1/2  w-screen  absolute rounded-large left-0  justify-center align-middle items-center '
      >
        <p className='font-inter font-normal text-xl md:text-4xl xl:text-5xl text-mypurple-0 w-4/5'>
          <span className='italic'>currently ,</span> I interested in Web
          Development and data vizualization . Also in my freetime I’m always
          reading technology arcticle on medium ,etc. or watch interactive
          content .
        </p>
      </div>
      <div
        ref={purple}
        className='invisible xl:visible w-screen xl:w-1/3 bg-mypurple-0 h-1/2 rounded-large absolute right-4 flex flex-col justify-center items-center '
      >
        <p className='font-inter font-bold text-xl md:text-4xl xl:text-5xl text-black w-1/3'>
          What i interested now ?
        </p>
      </div>
    </div>
  );
}

export default InteractCard;
