/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto-Condensed', 'Arial', 'sans-serif'],
        mono: ['Fira Code', 'Menlo', 'monospace'],
      },
    },

  },
  plugins: [],
}

