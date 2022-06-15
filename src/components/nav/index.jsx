import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

function Navbar({ visitor }) {
  const goto = (id) => {
    gsap.to(window, { duration: 1, scrollTo: { y: id, offsetY: 70 } });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className='w-full h-20 left-0 top-0 absolute flex justify-center align-middle z-10'
    >
      <div className='w-full md:w-4/6 h-full flex justify-between my-0 mx-6 items-center align-middle'>
        <div className='w-12 h-12'>
          <img
            className=''
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt='me'
          />
        </div>
        <ul className='flex justify-evenly align-middle items-center gap-5'>
          <li
            onClick={() => goto('#myproject')}
            className=' font-inter font-semibold ml-3 md:ml-10 text-sm  cursor-pointer text-gray-50'
          >
            Project
          </li>

          {/* <li className=' font-inter font-semibold ml-3 md:ml-10 text-sm  cursor-pointer text-gray-50'>
            About me
          </li> */}

          <a
            href={process.env.PUBLIC_URL + '/resume/aphisit_thu_resume.pdf'}
            download
            className=' font-inter font-semibold ml-3 md:ml-10 text-sm  cursor-pointer bg-white px-6 py-2 rounded-full text-black hover:bg-mypurple-0'
          >
            Resume+
          </a>
          <li className=' font-inter font-semibold ml-3 md:ml-10 text-sm  text-gray-700'>
            {visitor}
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
