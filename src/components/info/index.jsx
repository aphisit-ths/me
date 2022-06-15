import React, { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
function InfoPage() {
  const introRef = useRef(null);
  const introRef2 = useRef(null);
  const pinImage = useRef(null);

  useEffect(() => {
    gsap.to(introRef.current, {
      duration: 2,
      y: 400,
      scale: 0.7,

      scrollTrigger: {
        trigger: introRef.current,
        scrub: true,
        start: 'center center',
      },
    });
    gsap.from(introRef2.current, {
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: introRef2.current,
        scrub: true,
        start: 'top 80%',
        end: 'center 50%',
      },
    });
    gsap.from(pinImage.current, {
      duration: 2,

      scrollTrigger: {
        trigger: pinImage.current,
        scrub: true,
        pin: true,
        pinSpacing: true,
        start: 'center 40%',
        end: '110% start',
      },
    });
  }, []);

  return (
    <section
      id='infopage'
      className='bg-white w-full  min-h-screen flex justify-between  items-start flex-col lg:flex-row '
    >
      <div className='flex flex-col w-full lg:w-1/2 justify-evenly items-center align-middle'>
        <div
          ref={introRef}
          className='flex flex-col justify-center items-center align-middle  h-screen '
        >
          <HeroText1 />
        </div>
        <div
          ref={introRef2}
          className='flex flex-col justify-center items-center align-middle  h-screen '
        >
          <HeroText2 />
        </div>
      </div>
      <div
        ref={pinImage}
        className='lg:flex flex-col w-1/2 justify-evenly items-center hidden lg:visible   h-screen align-middle'
      >
        <div className='w-1/2 h-1/2 '>
          <img
            className='object-cover'
            src={process.env.PUBLIC_URL + '/me.jpg'}
            alt='sss'
          />
        </div>
      </div>
    </section>
  );
}

export default InfoPage;

const HeroText1 = () => {
  return (
    <>
      <div className='hero w-3/4 lg:w-2/3 flex flex-col justify-center align-middle '>
        <h2 className='font-inter text-sm lg:text-xl font-medium text-blue-600'>
          Greeting ?
        </h2>
        <p className='font-inter text-xl lg:text-3xl font-normal text-secondblack-0'>
          My name is{' '}
          <span className='italic font-bold text-blue-600'>
            Aphisit Thupsaeng{' '}
          </span>{' '}
          people call me{' '}
          <span className='italic font-bold text-blue-600'>Oat </span> that my
          nickname . I'm a 2nd year computer engineering student @ KMITL
        </p>
      </div>
    </>
  );
};
const HeroText2 = () => {
  return (
    <>
      <div className='hero w-3/4 lg:w-2/3 flex flex-col justify-center align-middle '>
        <h2 className='font-inter text-sm lg:text-xl font-medium text-blue-600'>
          What i do ?
        </h2>
        <p className='font-inter text-xl lg:text-3xl font-normal text-secondblack-0'>
          I have been learning software development for 2 year by online
          platform and university class . That not enough for real-life work.
          So, on summer period i have a free time around 1 - 2 month . I would
          like to learn more experience from real-life work and excited to
          leaning new things with new people.
        </p>
      </div>
    </>
  );
};
