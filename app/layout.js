import localFont from "next/font/local";
import "./globals.css";
import "./normalize.css"
import localFont from "next/font/local";
import Header from "./components/MainPage/Header";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from "./components/MainPage/Footer";
config.autoAddCss = false;

const islamicFont = localFont({
  src: "./fonts/islamic.ttf",
  variable: "--font-islamic",
});

export const metadata = {
  title: "أنوار الإيمان",
  description: "موقع أنوار الإيمان هو موقع متخصص لمواقيت الصلاة والأذكار",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="32x32" href="./img/kaaba.png" />
      </head>
      <body
        className={`${islamicFont.variable} font-islamic`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
