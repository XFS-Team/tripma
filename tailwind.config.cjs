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
        danger: '#EB5757',
        warning: '#FFD12F',
        'purple-dark': '#1513A0',
        'purple-light': '#E9E8FC',
        'purple-white': '#F6F6FE',
        'grey-400': '#7C8DB0',
        'grey-600': '#6E7491',
        'grey-200': '#CBD4E64D',
        'grey-100': '#FAFAFA',
      },
    },
  },
  plugins: [],
};
