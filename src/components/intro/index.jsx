import React from 'react';
import { motion } from 'framer-motion';
function IntroPage() {
  return (
    <div className='flex w-screen h-screen justify-center items-center flex-col bg-slate-50'>
      <div className='w-full h-full relative p-10'>
        <motion.div
          animate={{ y: [45, 10, 45] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{ scale: 1.2 }}
          className={`w-32 h-32 bg-red-100 cursor-pointer rounded-full hover:bg-red-200 absolute left-1/4 top-44`}
        ></motion.div>
        <motion.div
          animate={{ y: [-30, 10, -30] }}
          transition={{
            repeat: Infinity,
            duration: 8,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{ scale: 1.2 }}
          className={`w-32 h-32 bg-yellow-100 cursor-pointer rounded-full hover:bg-yellow-200  absolute bottom-20 left-2/4`}
        ></motion.div>
        <motion.div
          animate={{ y: [-30, 10, -30] }}
          transition={{
            repeat: Infinity,
            duration: 8,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{ scale: 1.2 }}
          className={`w-32 h-32 bg-green-100 cursor-pointer rounded-full hover:bg-green-200  absolute top-60 right-32`}
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
