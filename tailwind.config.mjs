

 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
            lightHover:'#fcf4ff',
            darkHover:'#2a004a',
            darkTheme:'#1100F'
        },
        fontFamily:{
            Outfit:["Outfit","sans-serif"],
            Ovo:["Ovo","serif"],
        }
      },
    },
    plugins: [],
  }