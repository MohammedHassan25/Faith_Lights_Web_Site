import Link from "next/link";
import "./salat.css";
export default function SalatSection() {
  return (
    <div
      className="h-screen bg-salatBackground bg-cover bg-center"
      loading="lazy"
    >
      <div className="h-screen absolute w-full bg-black opacity-40 "></div>
      <div className="flex justify-center items-center h-screen relative z-10">
        <div className="flex justify-center flex-wrap items-center text-center text-neutral-200 text-shadow-white main">
          <h1 className="text-6xl font-bold">مواقيت الصلاة</h1>
          <p className="text-3xl leading-[1.8] lg:text-4xl lg:leading-[1.8] sm:text-3xl sm:leading-[1.8]  mb-20 font-semibold">
            دلوقتي تقدر تعرف مواقيت الصلاة بكل سهولة ودقة من أي مكان وفي أي وقت
            علشان يساعدك على تنظيم وقتك والالتزام بصلاتك
          </p>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 mx-auto p-6 w-50 rounded-2xl text-2xl font-bold media">
            <Link href="/salat">مواقيت الصلاة</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
