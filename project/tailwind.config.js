/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      colors: {
        purple: {
          950: '#1a0536',
        }
      },
      boxShadow: {
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};