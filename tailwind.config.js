/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#337EEA',
        },
        secondary: {
          10: '#EDEEF3',
          20: '#A2B1C1',
          100: '#131828',
        },
      },
    },
  },
  plugins: [],
};
