/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#E8EDF2',
          dark: '#2C3947',
          primary: '#547A95',
          gold: '#C2A56D',
        },
      },
    },
  },
  plugins: [],
}

