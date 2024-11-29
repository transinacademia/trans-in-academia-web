import type { Config } from 'tailwindcss';
import lineClamp from '@tailwindcss/line-clamp';

export default <Partial<Config>>{
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
        'dodger-blue': {
          '50': '#f0f7fe',
          '100': '#dcecfd',
          '200': '#c1defc',
          '300': '#97caf9',
          '400': '#54a4f3',
          '500': '#428eef',
          '600': '#2c70e4',
          '700': '#245bd1',
          '800': '#234aaa',
          '900': '#224286',
          '950': '#192952',
        },
        cranberry: {
          '50': '#fdf2f6',
          '100': '#fce7f0',
          '200': '#fad0e2',
          '300': '#f8a9c8',
          '400': '#f274a4',
          '500': '#e94880',
          '600': '#d82a5e',
          '700': '#bb1b46',
          '800': '#9b193a',
          '900': '#811a34',
          '950': '#4f081a',
        },
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
