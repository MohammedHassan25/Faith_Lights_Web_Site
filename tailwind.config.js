/** @type {import('tailwindcss').Config} */
module.exports = {
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
      backgroundImage: {
        mainBackground: `url(/img/main-background.png)`,
        azkarBackground:`url(/img/azkar-bg.jpg)`,
        salatBackground:`url(/img/salat-bg.jpg)`
      },
      fontFamily: {
        islamic: ["var(--font-islamic)", "sans-serif"], // استخدام متغير CSS الذي عرفته
      },
    },
  },
  plugins: [],
};
