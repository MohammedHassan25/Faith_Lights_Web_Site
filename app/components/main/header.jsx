"use client";
import { useRef, useState } from "react";
import "./header.css";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuIcon = useRef(null);
  const menu = useRef(null);
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
    if (menuIcon.current) {
      menuIcon.current.classList.toggle("change");
    }
  };
  return (
    <header className=" z-10 absolute w-full">
      <div className="relative flex justify-between items-center w-9/12 m-auto line">
        <h1 className="font-black text-neutral-200 text-shadow-white font-islamic">
          أنوار الإيمان
        </h1>
        <div ref={menuIcon} className="menu-icon hidden" onClick={toggleMenu}>
          <div className="bar1 bg-neutral-200"></div>
          <div className="bar2 bg-neutral-200"></div>
          <div className="bar3 bg-neutral-200"></div>
        </div>
        <nav
          ref={menu}
          className={`${openMenu ? "flex" : "hidden"} justify-between w-3/6 menu `}
        >
          <a
            className={`${openMenu ? "hover:bg-blue-800 " : null} link font-bold text-neutral-200 text-shadow-white font-islamic hover:text-yellow-200`}
            href="./"
          >
            الصفحة الرئيسية
          </a>
          <a
            className={`${openMenu ? "hover:bg-blue-800 " : null} link font-bold text-neutral-200 text-shadow-white font-islamic hover:text-yellow-200`}
            href="./Azkar"
          >
            الأذكار
          </a>
          <a
            className={`${openMenu ? "hover:bg-blue-800 " : null} link font-bold text-neutral-200 text-shadow-white font-islamic hover:text-yellow-200`}
            href="./Salat"
          >
            مواقيت الصلاة
          </a>
          <a
            className={`${openMenu ? "hover:bg-blue-800 " : null} link font-bold text-neutral-200 text-shadow-white font-islamic hover:text-yellow-200`}
            href="./WhoWeAre"
          >
            من نحن ؟
          </a>
        </nav>
      </div>
    </header>
  );
}
