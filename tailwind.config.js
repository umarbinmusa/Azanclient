/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        brightred: 'hsl(12,88%,59%)',
        brightredlight: 'hsl(12,88%,59%)',
        brightredsuplight: 'hsl(12,88%,59%)',
        darkblue: 'hsl(228,39%,23%)',
        darkgraishblue: 'hsl(228,39%,23%)',
        verydarkblue: 'hsl(228,39%,23%)',
        verypelered: 'hsl(228,39%,23%)',
        verylightgray: 'hsl(228,39%,23%)',


      },
    },
  },
  plugins: [],
}

