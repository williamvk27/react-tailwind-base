/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ms-green': '#4ade80', // ou a cor que quiser
      },
    },
  },
  plugins: [],
};
