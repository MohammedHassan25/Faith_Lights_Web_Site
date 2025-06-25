import { use } from "react";
import { azkar } from "./azkarLoader";
import { AzkarTitle } from "./AzkarTitle";

export default function AzkarComponent() {
  const azkarData = use(azkar);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full p-6 flex justify-around items-between flex-wrap">
          {azkarData.map((azkarItem, i) => {
            return (
              <AzkarTitle key={i} title={azkarItem.title} />
            );
          })}
        </div>
      </div>
    </>
  );
}
