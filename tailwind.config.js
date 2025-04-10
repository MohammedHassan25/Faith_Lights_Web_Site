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
        hoverFace: {
          DEFAULT: "#0866ff",
        },
        hoverYoutube: {
          DEFAULT: "#FF0000",
        },
        hoverLinked: {
          DEFAULT: "#0077B5",
        },
        hoverTwitter: {
          DEFAULT: "#1DA1F2",
        },
      },
      backgroundImage: {
        mainBackground: `url(/img/main-background.webp)`,
        azkarBackground: `url(/img/azkar-bg.webp)`,
        salatBackground: `url(/img/salat-bg.webp)`,
        footerBackground: `url(/img/footer-bg.webp)`
      },
      fontFamily: {
        islamic: ["var(--font-islamic)", "sans-serif"], // استخدام متغير CSS الذي عرفته
      },
    },
  },
  plugins: [],
};
