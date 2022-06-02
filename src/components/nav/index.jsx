import React from 'react';
import { motion } from 'framer-motion';
function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className='w-full h-20 left-0 top-0 absolute flex justify-center align-middle z-10'
    >
      <div className='w-4/6 h-full flex justify-between my-0 mx-6 items-center align-middle'>
        <p className='font-inter font-semibold ml-10 cursor-pointer text-gray-700'>
          Home
        </p>
        <ul className='flex justify-evenly'>
          <a href='/#project'>
            <li className=' font-inter font-semibold ml-10 cursor-pointer text-gray-700'>
              Project
            </li>
          </a>

          <li className=' font-inter font-semibold ml-10 cursor-pointer text-gray-700'>
            About me
          </li>
          <li className=' font-inter font-semibold ml-10 cursor-pointer text-yellow-400'>
            Resume+
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
