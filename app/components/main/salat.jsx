import "./salat.css";
export default function Salat() {
  return (
    <div className="h-screen bg-salatBackground bg-cover bg-center">
      <div className="h-screen absolute w-full bg-black opacity-40 "></div>
      <div className="flex justify-center items-center h-screen relative z-10">
        <div className="flex justify-between items-center flex-wrap text-neutral-200 text-shadow-white main">
          <h1 className="text-6xl font-bold">مواقيت الصلاة</h1>
          <p className="text-4xl para leading-3 font-semibold">
            دلوقتي تقدر تعرف مواقيت الصلاة بكل سهولة ودقة من أي مكان وفي أي وقت
            علشان يساعدك على تنظيم وقتك والالتزام بصلاتك
          </p>
          <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 mx-auto p-6 w-50 rounded-2xl text-2xl font-bold media">
            <a href="/azkar">مواقيت الصلاة</a>
          </button>
        </div>
        <img className="h-full display" src="./img/salat.png" alt="azkar" />
      </div>
    </div>
  );
}
