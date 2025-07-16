"use client"
import AzkarComponent from "../components/AzkarPage/Azkar-Component.jsx";
import "./page.css"
export default function AzkarPage() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-azkarBackground bg-center bg-cover">.
        <div className="h-screen absolute w-full bg-black opacity-40 "></div>
        <h1 className="m-0 font-bold text-8xl text-center cssAnimation open-azkar sequence text-neutral-200 text-shadow-white text-shadow-yellow wrap-auto landing z-10">الأذكار</h1>
      </div>
      <AzkarComponent />
    </>
  );
}