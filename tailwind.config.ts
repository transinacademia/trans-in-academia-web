import type { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
  content: [
    'app.vue',
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tiaBlue: {
          DEFAULT: '#54A4F3',
          light: '#84C4F9',
          dark: '#1F83D7',
        },
        tiaPink: {
          DEFAULT: '#E94880',
          light: '#F37BA5',
          dark: '#B12360',
        },
        light: {
          background: '#FFFFFF',
          foreground: '#333333',
        },
        dark: {
          background: '#1A1A1A',
          foreground: '#E5E5E5',
        },
      },
      fontFamily: {
        body: ['Inter', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [lineClamp],
};

export default config;
