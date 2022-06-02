import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../utils/myinfo/projects';

function Projects() {
  console.log(projects);
  return (
    <section
      id='project'
      className='w-screen h-auto min-h-full flex flex-col px-44 py-20 justify-center bg-slate-200 '
    >
      <div className='w-4/5 h-1/3 '>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='font-medium font-inter text-6xl'
        >
          Relevant{' '}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='font-medium font-inter ml-20 text-6xl'
        >
          Project{' '}
        </motion.h1>
      </div>
      <div className='flex flex-row gap-10 flex-wrap w-full justify-center h-screen  mt-10'>
        {projects.map((project, i) => (
          <>
            <div className='bg-teal-500 w-5/12 h-1/2 flex flex-col justify-end cursor-pointer px-10'>
              <div className='w-full h-4/5  flex justify-center align-middle   '>
                <img
                  className='object-cover rounded-md'
                  src={process.env.PUBLIC_URL + project.imgUrl}
                  alt='kmit-reviewer'
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Projects;
