

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
        },
        boxShadow:{
          'black':'4px 4px 0 #000','white':'4px 4px 0 #fff'
        },
        gridTemplateColumns:{
          'auto':'repeat(auto-fit,minmax(200px,1fr))'
        }
      },
    },
    // darkMode:'selector',
    plugins: [],
  }