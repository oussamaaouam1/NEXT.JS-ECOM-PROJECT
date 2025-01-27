/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      colors: {
        primary: "#4C585B",
        secondary: "#7E99A3",
        light: "#A5BFCC",
        lighter: "#F4EDD3",
      },
    },
  },
  plugins: [],
};
