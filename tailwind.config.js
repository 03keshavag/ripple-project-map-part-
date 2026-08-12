/** @type {import('tailwindcss').Config} */
export default {
  // Class-based dark mode: toggling `.dark` on <html> switches the theme.
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0f766e', // teal — primary accent
          dark: '#0b5d57', // deep teal — hover / secondary accent
          light: '#14b8a6', // light teal — highlights
        },
      },
    },
  },
  plugins: [],
};