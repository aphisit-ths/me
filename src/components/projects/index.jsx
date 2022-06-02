import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../utils/myinfo/projects';

function Projects() {
  console.log(projects);
  return (
    <section
      id='project'
      className='w-screen max-h-max flex flex-col px-44 py-20 justify-center bg-slate-100 '
    >
      <div className='w-4/5 h-1/3 '>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className='font-medium font-inter text-6xl '
        >
          Relevant{' '}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className='font-medium font-inter ml-20 text-6xl text-gray-500'
        >
          Project{' '}
        </motion.h1>
      </div>
      <div className='flex flex-row gap-10 flex-wrap w-full justify-center h-screen  mt-10'>
        {projects.map((project, i) => (
          <>
            <a
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className=' w-5/12 h-1/2 flex flex-col justify-end cursor-pointer px-10'
            >
              <div className='w-full h-4/5  flex justify-center align-middle   '>
                <img
                  className='object-cover rounded-md'
                  src={process.env.PUBLIC_URL + project.imgUrl}
                  alt='kmit-reviewer'
                />
              </div>
              <div className='w-full h-20  my-1 '>
                <h1 className='font-inter font-light text-gray-700 text-2xl'>
                  {project.type}
                </h1>
                <h2 className='font-inter font-light text-gray-400 text-xl'>
                  {project.stack.map((stack, i) => stack + ',  ')}
                </h2>
              </div>
            </a>
          </>
        ))}
      </div>
    </section>
  );
}

export default Projects;
