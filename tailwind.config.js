/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        mainRed: "#F40404",
        mainWhite: "#FFFFFF",
        subGray: "#F0F0F0",
        grayLight: "#1F1F1F",
        mainGray: "#282828",
        whiteLight: "#E5E5E5",
      },
      colors: {
        lightGray: "#6C6C6C",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1144px",
      },
      padding: {
        DEFAULT: "5px",
        sm: "8px",
        md: "15px",
        lg: "10px",
      },
    },
  },
  plugins: [],
};
