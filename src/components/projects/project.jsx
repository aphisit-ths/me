import { projects } from '../../utils/myinfo/projects';

import React from 'react';

function Project() {
  return (
    <>
      {projects.map((ele, i) => (
        <>
          <div className='flex flex-col xl:flex-row w-full pt-10 mt-10 justify-between  border-t-minimal gap-7'>
            <div id='info' className='flex flex-col w-full lg:w-2/3'>
              <h1 className='font-inter font-medium text-xl lg:text-3xl'>
                {ele.name}
              </h1>
              <p className='font-inter font-light text-sm md:text-2xl text-gray-500'>
                {ele.desc.toLocaleLowerCase()}
              </p>
            </div>
            <a
              className='flex justify-center align-middle w-1/3 lg:w-1/5 h-10 bg-black items-center rounded-full mt-5 '
              href={ele.url}
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <p className='px-10 font-inter text-white'>Github</p>
            </a>
          </div>
        </>
      ))}

      {/* <div id='info' className='flex flex-col w-2/3'>
        <h1 className='font-inter font-medium text-3xl'>Project Name</h1>
        <p className='font-inter font-medium text-1xl text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci
          nisl, commodo tempus lorem non, aliquam volutpat risus. Proin accumsan
          magna augue, eget posuere odio volutpat non.
        </p>
      </div>
      <div
        id='github-botton '
        className='flex justify-center align-middle w-1/5 h-20 '
      >
        <div>Github</div>
      </div> */}
    </>
  );
}

export default Project;
