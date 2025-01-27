/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
  prefix: 'ui-', // prefix for class names
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'dark-background': 'var(--dark-background)',
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
