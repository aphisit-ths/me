import React from 'react';
import { motion } from 'framer-motion';
import './intro.scss';
function IntroPage() {
  const colors = ['bg-emerald-', 'bg-red-', 'bg-yellow-'];
  return (
    <div className='flex w-screen h-screen justify-center items-center flex-col bg-slate-50'>
      <div className='flex w-3/4 flex-row justify-between align-middle'>
        <motion.div
          animate={{ y: [-30, 10, -30] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            type: 'spring',
            stiffness: 100,
          }}
          className={`w-32 h-32 bg-red-100 cursor-pointer rounded-full hover:bg-red-300`}
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
          transition={{ delay: 0.5 }}
          className='font-normal font-inter text-2xl text-gray-500 '
        >
          (Looking for internship)
        </motion.h1>
      </div>
    </div>
  );
}

export default IntroPage;
