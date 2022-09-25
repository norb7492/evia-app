/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '25%': {
            transform: 'translate(6px)',
          },
          '50%': {
            transform: 'translate(-6px)',
          },
          '75%': {
            transform: 'translate(6px)',
          },
        },
      },
      animation: {
        'shaking-error': 'shake 0.3s',
      },
    },
  },
  plugins: [],
};
