import "./azkar.css"

export default function Azkar() {
  return (
    <div className="flex justify-center items-center shadow-inner shadow-neutral-300 h-screen bg-slate-900 relative overflow-hidden">
      <img className="absolute circle-top" src="./img/circle.png" alt="circle"/>
      <div className="flex justify-between items-center flex-wrap w-full text-neutral-200 text-shadow-white main">
        <h1 className="text-8xl font-bold">الأذكار</h1>
        <p className="text-4xl para">متوفر الآن بعض الأدعية والأذكار المهمة مثل أذكار الصباح والمساء وأذكار دخول المسجد وغيرها</p>
        <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 mx-auto p-6 w-40 rounded-2xl text-2xl font-bold "><a href="/azkar">الأذكار</a></button>
      </div>
      <img className="h-full w-full display" src="./img/azkar.png" alt="azkar"/>
      <img className="absolute circle-bottom" src="./img/circle.png" alt="circle"/>
    </div>
  )
}