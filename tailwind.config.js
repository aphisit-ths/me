module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '50px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        yeseva: ['Satoshi', 'sans-serif'],
      },
      colors: {
        secondblack: ['#1B1B1F'],
        mypurple: ['#A5A1FF'],
      },
    },
    borderWidth: {
      minimal: ['2px'],
    },
  },
  plugins: [],
};
