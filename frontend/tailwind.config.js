const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js", // Flowbite components
    ".flowbite-react\\class-list.json"
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'san-serif']
      }
    },
    gridTemplateColumns: {
      '50/50': '50% 50%',
    }
  },
  plugins: [require('flowbite/plugin'), flowbiteReact],
}