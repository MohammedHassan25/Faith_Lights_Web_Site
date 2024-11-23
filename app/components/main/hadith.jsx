import "./hadith.css";

export default function Hadith() {
  return (
    <>
      <div className="flex justify-center items-center w-11/12 m-auto p h-96 relative">
        <img className="spin w-48" src="./img/islamic-circle.png" alt="islamic-circle" />
        <q className="m-0 font-bold hadith-content text-center line-height-5 sequence text-sky-400 shadow-slate-400 wrap-auto">
          عن جابر بن عبد الله رضي الله عنهما قال: سمعت رسول الله صلى الله عليه
          وسلم يقول: أفضل الذكر لا إله إلا الله، وأفضل الدعاء الحمد لله. رواه
          ابن ماجه والترمذي وحسنه.
        </q>
        <img className="spin w-48" src="./img/islamic-circle.png" alt="islamic-circle" />
        <img src="./img/mousqe.png" className="mousqe w-36 m-auto absolute bottom-0" alt="wave"></img>
      </div>
    </>
  );
}
