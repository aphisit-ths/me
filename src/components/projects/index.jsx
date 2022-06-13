import React from 'react';
import Project from './project';
function Projects() {
  return (
    <section
      id='myproject'
      className='bg-white w-full min-h-screen  px-5 xl:px-20 py-10 xl:py-20'
    >
      <div className='flex flex-col w-full h-1/2 justify-center align-middle  gap-10'>
        <div id='hero-section '>
          <h1 className=' text-3xl md:text-5xl font-inter font-semibold'>
            Recently Project
          </h1>
          <p className=' text-sm md:text-2xl font-inter font-light w-2/3 mt-5 text-gray-400'>
            I'm have been learning about web development and choose java-script
            for main development language . Currently , I'm learning about gsap
            , framer-motion and beginer 
          </p>
        </div>
        <div id='elements-section' className='flex flex-col '>
          <Project />
        </div>
      </div>
    </section>
  );
}

export default Projects;
