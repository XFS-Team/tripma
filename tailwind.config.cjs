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
        'grey-200': '#CBD4E64D',
        'grey-100': '#FAFAFA',
        red: '#EB5757',
      },
      boxShadow: {
        dropDown:
          '0px 12px 24px 0px rgba(27, 59, 119, 0.05), 0px 24px 60px 0px rgba(6, 47, 125, 0.05), 0px 2px 4px 0px rgba(7, 4, 146, 0.10)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.scroll-hidden::-webkit-scrollbar': {
            display: 'none',
        },
        '.scroll-hidden': { 
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
        },
      });
    }
  ],
};
