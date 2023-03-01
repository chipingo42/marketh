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
        32: '32px',
        24: '24px',
        16: '16px',
      },
      fontWeight: {
        700: '700',
        500: '500',
        600: '600',
        400: '400',
        300: '300',
        200: '200',
      },
      padding: {
        60: '60px',
        63: '63px',
        229: '229px',
      },
    },
  },
  plugins: [],
}
