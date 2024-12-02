import "./landing.css";
export default function Landing() {
  return (
    <main className="relative bg-mainBackground bg-cover bg-center	 w-full h-screen">
      <div className="h-screen absolute w-full bg-black opacity-40"></div>
      {/* Overlay */}
      <div className="flex justify-evenly items-center flex-col pt-6 absolute w-5/6 h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="m-0 font-bold text-5xl text-center cssanimation open sequence text-neutral-200 text-shadow-white text-shadow-yellow wrap-auto">
          نحن أمة واحدة ... نحن المسلمون
        </p>
        <p className="m-0 font-bold text-5xl text-center cssanimation open sequence text-neutral-200 text-shadow-white wrap-auto ">
          موقع أنوار الإيمان هو موقع إسلامي متخصص لمواقيت الصلاة والأذكار
        </p>
      </div>
    </main>
  );
}
