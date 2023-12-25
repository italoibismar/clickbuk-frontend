module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0FAEB",
          100: "#D1F0C2",
          200: "#B2E699",
          300: "#94DB70",
          400: "#75D147",
          500: "#5CB82E",
          600: "#478F24",
          700: "#336619",
          800: "#1F3D0F",
          900: "#0A1405",
          950: "#060C03"
        },
        gray: {
          50: "#F9FBF9",
          100: "#F3F6F3",
          200: "#E6EBE5",
          300: "#D2DBD1",
          400: "#9EAF9C",
          500: "#6D806B",
          600: "#4E634B",
          700: "#3A5137",
          800: "#22371F",
          900: "#142711"
        },
        red: {
          "base": "#EF4444",
          "light": "#F87171",
          "dark": "#DC2626",
        }
      },
    },
  },
  plugins: [],
}