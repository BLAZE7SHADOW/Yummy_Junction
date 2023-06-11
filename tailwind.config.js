/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {


        'open': ['Open Sans'],
        'Poppins': ['Poppins'],
        'roboto': ['Roboto Condensed'],
        'quicksand': ['Quicksand'],
      }

    },
  },
  plugins: [],
}

