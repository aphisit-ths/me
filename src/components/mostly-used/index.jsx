import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
function MostlyUsedPage() {
  const icons = {
    row1: ['js', 'python', 'ts', 'mongo'],
    row2: ['react', 'next', 'nodejs', 'gql'],
    row3: ['gsap', 'html', 'sass', 'tailwindcss'],
    row4: ['figma', 'docker', 'github', 'framermotion'],
  };
  const Row1 = icons.row1.map((icon, i) => (
    <>
      <img
        className='w-20 h-20 md:w-32 md:h-32'
        key={i}
        src={process.env.PUBLIC_URL + `/assets/${icon + '.png'}`}
        alt={icon}
      />
    </>
  ));
  const Row2 = icons.row2.map((icon, i) => (
    <>
      <img
        className='w-20 h-20 md:w-32 md:h-32'
        key={i}
        src={process.env.PUBLIC_URL + `/assets/${icon + '.png'}`}
        alt={icon}
      />
    </>
  ));
  const Row3 = icons.row3.map((icon, i) => (
    <>
      <img
        className='w-20 h-20 md:w-32 md:h-32'
        key={i}
        src={process.env.PUBLIC_URL + `/assets/${icon + '.png'}`}
        alt={icon}
      />
    </>
  ));
  const Row4 = icons.row4.map((icon, i) => (
    <>
      <motion.img
        className='w-20 h-20 md:w-32 md:h-32 '
        key={i}
        src={process.env.PUBLIC_URL + `/assets/${icon + '.png'}`}
        alt={icon}
      />
    </>
  ));
  return (
    <div className='flex w-screen h-screen justify-center align-middle items-center  flex-col'>
      <div className='max-w-lg text-center'>
        <h1 className='font-inter font-semibold text-4xl'>Mostly Used &</h1>
        <h1 className='font-inter font-semibold text-4xl'>
          Interested Technology Stack
        </h1>
      </div>

      <div className='flex flex-row max-w-lg'>{Row1}</div>
      <div className='flex flex-row max-w-lg'>{Row2}</div>
      <div className='flex flex-row max-w-lg'>{Row3}</div>
      <div className='flex flex-row max-w-lg'>{Row4}</div>
    </div>
  );
}

export default MostlyUsedPage;
