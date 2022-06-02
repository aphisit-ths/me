import React from 'react';
import { motion } from 'framer-motion';

function IntroPage() {
  return (
    <div className='flex w-screen h-screen justify-center items-center flex-col bg-slate-50'>
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
      <div className='w-auto absolute'>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='font-light font-inter text-2xl'
        >
          Aphisit Thupsaeng{' '}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='font-normal font-inter text-9xl'
        >
          Software Developer{' '}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='font-normal font-inter text-9xl '
        >
          Data Analytic{' '}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className='font-normal font-inter text-2xl text-gray-500 '
        >
          (Looking for internship)
        </motion.h1>
      </div>
    </div>
  );
}

export default IntroPage;
