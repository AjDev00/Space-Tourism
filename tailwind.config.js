/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobileBgImage: "url('/src/assets/home/background-home-mobile.jpg')",
        mobileDestinationBgImage:
          "url('/src/assets/destination/background-destination-mobile.jpg')",
      },
      fontFamily: {
        barlow: ["Barlow"],
      },
    },
  },
  plugins: [],
};
