/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': '300px',
      'sm': '450px',
      'md': '650px',
      'lg': '875px',
      'xl': '1100px',
      '2xl': '1300px',    
    }
  },
  plugins: [],
}

