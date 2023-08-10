/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Soft-violet': 'hsl(273, 75%, 66%)',
        'Soft-blue': 'hsl(240, 73%, 65%)',
        'Very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'Dark-grayish-blue': 'hsl(240, 6%, 50%)',
        'Light-grayish-blue': 'hsl(240, 5%, 91%)',
        'Soft-red': 'hsl(14, 88%, 65%)',
      },
    },
  },
  plugins: [],
}

