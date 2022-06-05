import { motion } from 'framer-motion';
export const icons = {
  row1: ['js', 'python', 'ts', 'mongo'],
  row2: ['react', 'next', 'nodejs', 'gql'],
  row3: ['gsap', 'html', 'sass', 'tailwindcss'],
  row4: ['figma', 'docker', 'github', 'framermotion'],
};

export const Row1 = icons.row1.map((icon, i) => (
  <>
    <img
      className='w-20 h-20 md:w-32 md:h-32'
      key={i}
      src={process.env.PUBLIC_URL + `/assets/${icon + '.png'}`}
      alt={icon}
    />
  </>
));
export const Row2 = icons.row2.map((icon, i) => (
  <>
    <img
      className='w-20 h-20 md:w-32 md:h-32'
      key={i}
      src={process.env.PUBLIC_URL + `/assets/${icon + '.png'}`}
      alt={icon}
    />
  </>
));
export const Row3 = icons.row3.map((icon, i) => (
  <>
    <img
      className='w-20 h-20 md:w-32 md:h-32'
      key={i}
      src={process.env.PUBLIC_URL + `/assets/${icon + '.png'}`}
      alt={icon}
    />
  </>
));
export const Row4 = icons.row4.map((icon, i) => (
  <>
    <motion.img
      className='w-20 h-20 md:w-32 md:h-32 '
      key={i}
      src={process.env.PUBLIC_URL + `/assets/${icon + '.png'}`}
      alt={icon}
    />
  </>
));
