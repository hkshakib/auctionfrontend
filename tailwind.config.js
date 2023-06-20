/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'nav': '14px',
        'addItem' : '22px',
        'label' : '15px',
        'hd' : '24px',
        'pi' : '20px',
      },
      width: {
        '36': '36%',
        '600' : '600px',
        '400' : '400px',
        '300' : '300px',
        '120' : '120px',
        '100%': '100%',
      },
      height:{
        '40' : '40px',
        '400': '400px',
        '50' : '50px',
      },
    },
  },
  plugins: [],
}

