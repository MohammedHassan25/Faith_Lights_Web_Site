"use client";
import { useRef, useState } from "react";
import "./header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  // helper function علشان توفر تكرار
  const linkClasses = (href) =>
    `${openMenu ? "hover:bg-blue-800" : ""} ${
      pathname === href ? "text-yellow-200" : ""
    } link font-bold text-neutral-200 text-shadow-white font-islamic hover:text-yellow-200`;

  return (
    <header className="z-10 absolute w-full">
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
          className={`${
            openMenu ? "flex" : "hidden"
          } justify-between w-3/6 menu`}
        >
          <Link href="/" className={linkClasses("/")}>
            الصفحة الرئيسية
          </Link>
          <Link href="/azkar" className={linkClasses("/azkar")}>
            الأذكار
          </Link>
          <Link href="/salat" className={linkClasses("/salat")}>
            مواقيت الصلاة
          </Link>
          <Link href="/WhoWeAre" className={linkClasses("/WhoWeAre")}>
            من نحن ؟
          </Link>
        </nav>
      </div>
    </header>
  );
}
