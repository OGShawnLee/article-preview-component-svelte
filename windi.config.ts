import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    colors: {
      black: 'hsl(0, 0%, 0%)',
      slate: {
        100: 'hsl(210, 46%, 95%)',
        300: 'hsl(212, 23%, 69%)',
        500: 'hsl(214, 17%, 51%)',
        600: 'hsl(217, 19%, 35%)',
      },
      white: 'hsl(0, 100%, 100%)',
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
  },
});
