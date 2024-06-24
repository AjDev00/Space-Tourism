/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobileBgImage: "url('/src/assets/home/background-home-mobile.jpg')",
        mobileDestinationBgImage:
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        mobileCrewBgImage: "url('/src/assets/crew/background-crew-mobile.jpg')",
        mobileTechnologyBgImage:
          "url('/src/assets/technology/background-technology-mobile.jpg')",
        desktopBgImage: "url('/src/assets/home/background-home-desktop.jpg')",
        desktopDestinationBgImage:
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        desktopCrewBgImage:
          "url('/src/assets/crew/background-crew-desktop.jpg')",
        desktopTechnologyBgImage:
          "url('/src/assets/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        barlow: ["Barlow"],
      },
    },
  },
  plugins: [],
};
