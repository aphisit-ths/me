import { projects } from '../../utils/myinfo/projects';

import React from 'react';

function Project() {
  return (
    <>
      {projects.map((ele, i) => (
        <>
          <div className='flex flex-col xl:flex-row w-full pt-10 mt-10 justify-between  border-t-minimal gap-7'>
            <div id='info' className='flex flex-col w-full lg:w-2/3'>
              <h1 className='font-inter font-bold text-xl lg:text-3xl text-gray-700'>
                {ele.name}
              </h1>
              <p className='font-inter font-light text-sm md:text-lg text-slate-400'>
                {ele.desc.toLocaleLowerCase()}
              </p>
            </div>
            <a
              className='flex justify-center align-middle w-1/4 lg:w-1/6 h-14 bg-black hover:bg-gradient-to-r from-black to-mypurple-0  items-center rounded-full mt-5 '
              href={ele.url}
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <p className='font-inter text-white'>Github</p>
            </a>
          </div>
        </>
      ))}
    </>
  );
}

export default Project;
