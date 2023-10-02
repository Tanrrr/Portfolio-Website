/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}', 'public/index.html'], // './src/**/*.{js,jsx,ts,tsx}', './public/index.html
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#F8F4EA',
        secondary: '#579BB1',
        button_primary: '#ECE8DD',
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

