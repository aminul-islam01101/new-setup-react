/** @type {import('tailwindcss').Config} */
const daisyPlugin = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyPlugin],
};
