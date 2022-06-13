import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Row1, Row2, Row3, Row4 } from './techstack_ele';
gsap.registerPlugin(ScrollTrigger);

function MostlyUsedPage() {
  //animation object -->
  function setRowEffect(row, delay, x) {
    const effect_object = {
      opacity: 0,
      duration: 0.5,
      x: x,
      delay: delay,
      scrollTrigger: {
        trigger: row,
        start: 'top bottom',
        end: 'center 70% ',
      },
    };
    return effect_object;
  }

  //define Ref -->
  const rowRef = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const row4Ref = useRef(null);

  const body = useRef(null);
  //define animate
  useEffect(() => {
    const rowEffect = setRowEffect(rowRef.current, 0.5, -100);
    const row2Effect = setRowEffect(row2Ref.current, 0.8, 200);
    const row3Effect = setRowEffect(row3Ref.current, 1.1, -300);
    const row4Effect = setRowEffect(row4Ref.current, 1.3, 400);

    gsap.from(rowRef.current, { ...rowEffect });
    gsap.from(row2Ref.current, { ...row2Effect });
    gsap.from(row3Ref.current, { ...row3Effect });
    gsap.from(row4Ref.current, { ...row4Effect });

    gsap.to(body.current, {
      y: 100,
      scrollTrigger: {
        trigger: body.current,
        scrub: true,
        start: 'center center',
      },
    });
  }, []);

  return (
    <div className='flex w-screen h-screen justify-center align-middle gap-11 items-center  flex-col bg-black'>
      <div className='max-w-lg text-center'>
        <h1 className='font-inter font-semibold text-2xl md:text-4xl  text-white'>
          Mostly Used &
        </h1>
        <h1 className='font-inter font-semibold text-2xl md:text-4xl  text-white'>
          Interested Technology Stack
        </h1>
      </div>
      <div className='flex flex-col gap-1'>
        <div
          className='flex flex-row max-w-lg   bg-secondblack-0 rounded-2xl'
          id='row1'
          ref={rowRef}
        >
          {Row1}
        </div>
        <div
          ref={row2Ref}
          className='flex flex-row max-w-lg  bg-secondblack-0 rounded-2xl'
        >
          {Row2}
        </div>
        <div
          ref={row3Ref}
          className='flex flex-row max-w-lg  bg-secondblack-0 rounded-2xl'
        >
          {Row3}
        </div>
        <div
          ref={row4Ref}
          className='flex flex-row max-w-lg  bg-secondblack-0 rounded-2xl'
        >
          {Row4}
        </div>
      </div>
    </div>
  );
}

export default MostlyUsedPage;
