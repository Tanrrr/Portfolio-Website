/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}', 'public/index.html'], // './src/**/*.{js,jsx,ts,tsx}', './public/index.html
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#FFF4FE',
        secondary: '#c8b8db',
        button_primary: '#E6D6FA',
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

