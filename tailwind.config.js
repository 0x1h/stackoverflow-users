const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, 
  theme: {
    extend: {
      outline: {
        black: "3px solid #000",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "2rem",
      full: "9999px",
      large: "12px",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "600px",
      full: "100%",
    },
    gridTemplateColumns: {
      16: "repeat(16, minmax(0, 1fr))",
      footer: "200px minmax(900px, 1fr) 100px",
      custom: "200px 1fr",
      3: "repeat(3, 1fr)",
    },
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
    colors: {
      primary: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },
      gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },
      transparent: "transparent",
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      red: {
        100: "#ff7373",
        200: "#ff5e5e",
        300: "#fa4343",
        400: "#f52525",
        500: "#ad0000",
        600: "#8a0000",
        700: "#4a0000",
      },
      orange: {
        100: "#ffaf5e",
        200: "#ffa245",
        300: "#ff9124",
        400: "#ff8308",
        500: "#db6d00",
        600: "#c26000",
        700: "#a85300",
        800: "#803f00",
        900: "#572b00",
      },
      yellow: {
        100: "#f9ff4a",
        200: "#f8ff29",
        300: "#f7ff0d",
        400: "#d4db00",
        500: "#bcc200",
        600: "#979c00",
        700: "#747800",
        800: "#595500",
        900: "#494a00",
      },
      black: {
        900: "#000",
      },
      white: {
        900: "#FFF",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/forms"), 
    ],
  },
}