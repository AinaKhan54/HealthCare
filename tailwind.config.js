/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B0082',
        secondary: '#D8BFD8',
        tertiary: '#E6E6FA',
        fourth: '#BA55D3',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      borderWidth: {
        1: '0px'
      },
      borderColor: {
        blue: 'blue',
        red: 'red',
      },
      // Adding custom background images
      backgroundImage: {
        'login-background': "url('/assests/images/image4.jpg')", // Add your custom image path here
      },
    },
  },
  plugins: [],
}
