/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
const tailwindConfig: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],

  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'],
      },
    },
  },
  plugins: [
    aspectRatio,
    forms({
      strategy: 'class',
    }),
  ],
};

export default tailwindConfig;
