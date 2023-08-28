/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'Inter'],
      },
      colors: {
        primary: '#605DEC',
        'purple-dark': '#1513A0',
        'purple-light': '#E9E8FC',
        'grey-400': '#7C8DB0',
        'grey-600': '#6E7491',
        'grey-100': '#FAFAFA',
        red: '#EB5757',
      },
    },
  },
  plugins: [],
};
