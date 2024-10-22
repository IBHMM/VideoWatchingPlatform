/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xxs": "320px",
        'xs': '480px',   
        'sm': '600px',   
        'md': '768px',   
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px', 
      },
    },
  },
  plugins: [],
}
