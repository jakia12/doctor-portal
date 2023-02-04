/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
    ,
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      blue: '#0FCFEC',
      grFirst: "#11998e",
      grSecond: "#38ef7d",
      paste: '#0FCFEC',
      rose: "#fb7185",
      darkSlate: "#1e293b",
      lightSlate: "#334155",
      gray: "#f9f9f9",
      white: "#fff",
      dark: "#000",
      darkGray: "#B3B3B3",
      lightBlue: "#508AEF",
      nudeBlue: "#ECF5FF",
      deepBlue: "#000060",
      gray1: "#f9fafb",
      gray2: "#f3f4f6",
      gray3: "#e5e7eb",

    },
    themes: [
      {
        mytheme: {

          "primary": "#ec4899",

          "secondary": "#a855f7",



          "error": "#F87272",
        },
      },
    ],
    // daisyui: {
    //   styled: false,
    //   themes: true,
    //   base: false,
    //   utils: true,
    //   logs: true,
    //   rtl: false,
    //   prefix: "",
    //   darkTheme: "dark",
    // },
    zIndex: {
      '-1': '-1',
    }
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}