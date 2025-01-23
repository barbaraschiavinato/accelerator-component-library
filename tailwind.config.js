/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './lib/**/*.{js,ts,jsx,tsx}',
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
