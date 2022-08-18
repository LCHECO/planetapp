/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#3668f0',
      'purple': '#6d2ed5',
      'white': '#ffffff',
      'orange': '#cd5121',
      'green': '#42c1a2',
      'darkyellow': '#eda249',
      'gray-dark': '#38384f',
      'darkblue': '#070824',
      'gray-light': '#838391',
    },
    fontFamily: {
      sans: ['Antonio', 'sans-serif'],
      serif: ['Spartan', 'serif'],
    },
    container: {
      center: true,
    },
    
  },
  plugins: [],
}
