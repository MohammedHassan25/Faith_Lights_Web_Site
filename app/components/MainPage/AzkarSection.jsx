import Link from "next/link";
import "./azkar.css";

export default function AzkarSection() {
  return (
    <div className=" bg-azkarBackground bg-cover bg-center h-screen bg-slate-900 relative overflow-hidden" loading="lazy">
      <div className="h-screen absolute w-full bg-black opacity-40 "></div>
      <div className="flex justify-center items-center h-screen w-screen relative z-10">
        <div className="flex justify-between items-center flex-wrap w-full text-neutral-200 text-shadow-white main">
          <h1 className="text-8xl font-bold mt-5 font">الأذكار</h1>
          <p className="text-4xl leading-[1.8] mb-20 font-semibold">
            متوفر الآن بعض الأدعية والأذكار المهمة مثل أذكار الصباح والمساء
            وأذكار دخول المسجد وغيرها
          </p>
          <button className="bg-blue-600 shadow-lg shadow-blue-600/50 mx-auto p-6 w-40 rounded-2xl text-2xl font-bold media">
            <Link href="/azkar">الأذكار</Link>
          </button>
        </div>
        <img
          className="h-full w-full display"
          src="./img/azkar.webp"
          alt="azkar"
          loading="lazy"
        />
      </div>
    </div>
  );
}
