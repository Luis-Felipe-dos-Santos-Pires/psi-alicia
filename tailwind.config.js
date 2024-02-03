/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url(/src/assets/pawel12.jpg)"
      },
      colors: {
        'transparent-black-25': "rgba(0,0,0,0.25)",
        'transparent-black-50': "rgba(0,0,0,0.50)"
      }
    },
  },
  plugins: [],
}

