"use client";
import { useEffect, useState } from "react";
import { SalatCard } from "./SalatCard";

function SalatTimes() {
  const [city, setCity] = useState("غير معروف");
  const [country, setCountry] = useState("غير معروف");

  return (
    <div className="p-8 font-bold text-2xl text-center">
      <div>
        <q className="text-6xl">
          إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا
        </q>
        <p className="mt-4 text-4xl">[النساء: 103]</p>
      </div>
      <div className="mt-8 text-3xl">
        مواقيت الصلاة تختلف حسب الموقع الجغرافي والتاريخ. يمكنك استخدام موقعنا
        لمعرفة أوقات الصلاة بدقة عن طريق تحديد الدولة والمدينة
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-8 w-full">
        <SalatCard />
        <SalatCard />
        <SalatCard />
        <SalatCard />
        <SalatCard />
      </div>
    </div>
  );
}

export default SalatTimes;
