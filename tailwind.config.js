/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ['Megrim', 'cursive'],
        signature: ['Herr Von Muellerhoff', 'cursive']
      }
    },
  },
  plugins: [],
}

