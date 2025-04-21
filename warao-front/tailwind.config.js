/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}',
    './navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'warao-brown': '#3B2414',
        'warao-green-dark': '#747F64',
        'warao-sandcolor': '#E8E2D8',
      },
    },
  },
  plugins: [],
};
