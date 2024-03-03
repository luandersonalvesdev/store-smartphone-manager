const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gunmetal: '#292F36',
        'light-red': '#FF6B6B',
      },
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
