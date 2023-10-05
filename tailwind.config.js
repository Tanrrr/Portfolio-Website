/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}', 'public/index.html'], // './src/**/*.{js,jsx,ts,tsx}', './public/index.html
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#F9F4F5',
        secondary: '#c8b8db',
        button_primary: '#E6D6FA',
        button_small: '#70587C',
      },
      variants: {
        extend: {
          backgroundColor: ['active'], // Enable active variant for backgroundColor
          textColor: ['active'],       // Enable active variant for textColor
          // Add other variants as needed
        },
      },
    },
  },
  plugins: [],
}

