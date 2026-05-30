import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          deep: '#B54A00',
          mid: '#E06A1A',
          light: '#F5A053',
          pale: '#FDE8D0',
        },
        navy: {
          deep: '#0A1628',
          mid: '#112240',
          light: '#1E3A5F',
          muted: '#2E5080',
        },
        gold: {
          rich: '#C9930A',
          warm: '#E6B830',
          pale: '#F5D98A',
        },
        cream: '#FAF6F0',
        ivory: '#F5F0E8',
        charcoal: '#1A1A2E',
        mist: '#D4C9BC',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
