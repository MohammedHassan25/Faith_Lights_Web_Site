import { use, useState } from "react";
import { AzkarCard } from "./AzkarCard";
import { azkar } from "./fetchAzkar";

export default function AzkarComponent() {
  const azkarData = use(azkar);
  const [ select, setSelect ] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8 font-islamic">
        <p className="text-xl md:text3xl sm:text-2xl lg:text-4xl font-bold text-center w-11/12">
          يمكنك الضغط على كارت الذِّكر لمعرفة عدد المرات المتبقية لذكره
        </p>
        <div className="w-full p-6 flex justify-around items-between flex-wrap">
          {azkarData.map((azkarItem, i) => {
            return (
              <button
                className={
                  select === i
                    ? "text-2xl font-bold bg-yellow-600 p-2 rounded-lg mb-4 text-neutral-200 text-shadow-white "
                    : "text-2xl font-bold bg-cyan-500 p-2 rounded-lg mb-4 duration-200 hover:bg-cyan-600"
                }
                key={i}
                id={i}
                onClick={() => setSelect(i)}
              >
                {azkarItem.title}
              </button>
            );
          })}
        </div>
        <div className="p-6 flex-col flex">
          {azkarData.map((azkar, i) => {
            if (select === i) {
              return azkar.items.map((words, i) => {
                return (
                  <AzkarCard
                    key={i}
                    azkarText={words.text}
                    count={words.count}
                  />
                );
              });
            }
          })}
        </div>
      </div>
    </>
  );
}
