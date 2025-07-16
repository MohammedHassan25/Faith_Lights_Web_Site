import { useState } from "react";

export function AzkarCard(props) {
  const { azkarText, count } = props;
  const [counter, setCounter] = useState(count === undefined ? 1 : count);
  console.log(counter);
  return (
    <div
      className={
        counter !== 0
          ? "flex justify-center items-center select-none "
          : "flex justify-center items-center select-none opacity-50"
      }
      onClick={() => setCounter(counter === 0 ? counter : counter - 1)}
    >
      <div className="w-4/5 flex justify-center cursor-pointer items-center shadow-lg rounded-3xl mb-12 flex-col hover:-translate-y-2 duration-150">
        <h2 className="w-full text-2xl text-neutral-200 text-shadow-white bg-blue-600 p-3 rounded-t-3xl leading-10 font-islamic text-center">
          {azkarText}
        </h2>
        <div className="flex justify-center items-center ">
          <div></div>
          <p className="h-16 flex items-center font-islamic font-bold text-2xl">
            التكرار : {counter}
          </p>
        </div>
      </div>
    </div>
  );
}
