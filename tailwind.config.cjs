/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        dropDown:
          '0px 12px 24px 0px rgba(27, 59, 119, 0.05), 0px 24px 60px 0px rgba(6, 47, 125, 0.05), 0px 2px 4px 0px rgba(7, 4, 146, 0.10)',
        card: '0px 12px 32px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(28, 5, 77, 0.10)',
        cardPayment:
          '4px 4px 16px 0px rgba(255, 255, 255, 0.20) inset, -4px -4px 16px 0px rgba(0, 0, 0, 0.10) inset',
        calender:
          '0px 12px 24px 0px rgba(27, 59, 119, 0.05), 0px 24px 60px 0px rgba(6, 47, 125, 0.05), 0px 2px 4px 0px rgba(7, 4, 146, 0.10)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'Inter'],
      },
      colors: {
        primary: '#605DEC',
        secondary: '#5CD6C0',
        tertiary: '#007B65',
        danger: '#EB5757',
        warning: '#FFD12F',
        green: {
          200: '#EAFFFB',
          400: '#007B65',
        },
        purple: {
          dark: '#1513A0',
          light: '#E9E8FC',
          while: '#F6F6FE',
          extra: '#E9E8FC',
        },
        grey: {
          100: '#FAFAFA',
          200: '#CBD4E6',
          300: '#A1B0CC',
          400: '#7C8DB0',
          600: '#6E7491',
          800: '#36374A',
          900: '#27273F',
        },
      },
      backgroundImage: {
        pinkGradient: 'linear-gradient(180deg, #EB568C 0%, #ED5E76 100%)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 16px',
        },
        '.container-no-padding': {
          maxWidth: '1440px',
          margin: '0 auto',
        },
        '.scroll-hidden::-webkit-scrollbar': {
          display: 'none',
        },
        '.scroll-hidden': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};
