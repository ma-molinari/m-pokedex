import { pokemonTypePalette } from './src/utils/pokemonTypePalette.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: pokemonTypePalette,
    },
  },
  plugins: [],
}
