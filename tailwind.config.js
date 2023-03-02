/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Inter: 'Inter'
      },
      fontSize: {
        60: '60px',
        40: '40px',
        32: '32px',
        36: '36px',
        20: '20px',
        24: '24px',
        16: '16px',
      },
      fontWeight: {
        900: '900',
        800: '800',
        700: '700',
        500: '500',
        600: '600',
        400: '400',
        300: '300',
        200: '200',
        100: '100',
      },
      padding: {
        21: '21px',
        41: '41px',
        60: '60px',
        63: '63px',
        229: '229px',
        166: '166px',
      },
      margin: {
        21: '21px',
        102: '102px',
      },
    },
  },
  plugins: [],
}
