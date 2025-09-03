"use client";
import { useEffect, useState } from "react";
import { SalatCard } from "./SalatCard";
import Select from "react-select";
import clsx from "clsx";

function SalatTimes() {
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [timings, setTimings] = useState({});
  const [dateReadable, setDateReadable] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const optionsCountry = [
    { value: "Egypt", label: "مصر" },
    { value: "Saudi Arabia", label: "السعودية" },
    { value: "United Arab Emirates", label: "الإمارات" },
    { value: "Kuwait", label: "الكويت" },
    { value: "Qatar", label: "قطر" },
    { value: "Bahrain", label: "البحرين" },
    { value: "Oman", label: "عُمان" },
    { value: "Yemen", label: "اليمن" },
    { value: "Sudan", label: "السودان" },
    { value: "Morocco", label: "المغرب" },
    { value: "Algeria", label: "الجزائر" },
    { value: "Tunisia", label: "تونس" },
    { value: "Libya", label: "ليبيا" },
    { value: "Jordan", label: "الأردن" },
    { value: "Palestine", label: "فلسطين" },
    { value: "Lebanon", label: "لبنان" },
    { value: "Syria", label: "سوريا" },
    { value: "Iraq", label: "العراق" },
    // دول عالمية
    { value: "United States", label: "الولايات المتحدة" },
    { value: "Canada", label: "كندا" },
    { value: "United Kingdom", label: "المملكة المتحدة" },
    { value: "France", label: "فرنسا" },
    { value: "Germany", label: "ألمانيا" },
    { value: "Italy", label: "إيطاليا" },
    { value: "Spain", label: "إسبانيا" },
    { value: "Russia", label: "روسيا" },
    { value: "China", label: "الصين" },
    { value: "Japan", label: "اليابان" },
    { value: "India", label: "الهند" },
    { value: "Brazil", label: "البرازيل" },
    { value: "Argentina", label: "الأرجنتين" },
    { value: "Australia", label: "أستراليا" },
    { value: "Turkey", label: "تركيا" },
    { value: "South Africa", label: "جنوب أفريقيا" },
  ];

  const optionsCity = {
    Egypt: [
      { value: "Cairo", label: "القاهرة" },
      { value: "Giza", label: "الجيزة" },
      { value: "Alexandria", label: "الإسكندرية" },
      { value: "Port Said", label: "بورسعيد" },
      { value: "Suez", label: "السويس" },
      { value: "Mansoura", label: "المنصورة" },
      { value: "Zagazig", label: "الزقازيق" },
      { value: "Ismailia", label: "الإسماعيلية" },
      { value: "Asyut", label: "أسيوط" },
      { value: "Sohag", label: "سوهاج" },
      { value: "Luxor", label: "الأقصر" },
      { value: "Aswan", label: "أسوان" },
      { value: "Beni Suef", label: "بني سويف" },
      { value: "Faiyum", label: "الفيوم" },
      { value: "Minya", label: "المنيا" },
      { value: "Damietta", label: "دمياط" },
      { value: "Kafr El Sheikh", label: "كفر الشيخ" },
      { value: "Tanta", label: "طنطا - الغربية" },
      { value: "Dakahlia", label: "الدقهلية" },
      { value: "Arish", label: "العريش - شمال سيناء" },
      { value: "Sharm El Sheikh", label: "شرم الشيخ - جنوب سيناء" },
    ],
    "Saudi Arabia": [
      { value: "Riyadh", label: "الرياض" },
      { value: "Jeddah", label: "جدة" },
      { value: "Dammam", label: "الدمام" },
    ],
    "United Arab Emirates": [
      { value: "Dubai", label: "دبي" },
      { value: "Abu Dhabi", label: "أبوظبي" },
      { value: "Sharjah", label: "الشارقة" },
    ],
    Kuwait: [{ value: "Kuwait City", label: "مدينة الكويت" }],
    Qatar: [{ value: "Doha", label: "الدوحة" }],
    Bahrain: [{ value: "Manama", label: "المنامة" }],
    Oman: [{ value: "Muscat", label: "مسقط" }],
    Yemen: [{ value: "Sanaa", label: "صنعاء" }],
    Sudan: [{ value: "Khartoum", label: "الخرطوم" }],
    Morocco: [
      { value: "Casablanca", label: "الدار البيضاء" },
      { value: "Rabat", label: "الرباط" },
    ],
    Algeria: [{ value: "Algiers", label: "الجزائر العاصمة" }],
    Tunisia: [{ value: "Tunis", label: "تونس العاصمة" }],
    Libya: [{ value: "Tripoli", label: "طرابلس" }],
    Jordan: [{ value: "Amman", label: "عمّان" }],
    Palestine: [
      { value: "Jerusalem", label: "القدس" },
      { value: "Ramallah", label: "رام الله" },
      { value: "Gaza", label: "غزة" },
    ],
    Lebanon: [{ value: "Beirut", label: "بيروت" }],
    Syria: [{ value: "Damascus", label: "دمشق" }],
    Iraq: [{ value: "Baghdad", label: "بغداد" }],
    "United States": [
      { value: "New York", label: "نيويورك" },
      { value: "Los Angeles", label: "لوس أنجلوس" },
      { value: "Washington", label: "واشنطن" },
    ],
    Canada: [{ value: "Toronto", label: "تورونتو" }],
    "United Kingdom": [{ value: "London", label: "لندن" }],
    France: [{ value: "Paris", label: "باريس" }],
    Germany: [{ value: "Berlin", label: "برلين" }],
    Italy: [{ value: "Rome", label: "روما" }],
    Spain: [{ value: "Madrid", label: "مدريد" }],
    Russia: [{ value: "Moscow", label: "موسكو" }],
    China: [
      { value: "Beijing", label: "بكين" },
      { value: "Shanghai", label: "شنغهاي" },
    ],
    Japan: [{ value: "Tokyo", label: "طوكيو" }],
    India: [
      { value: "Delhi", label: "دلهي" },
      { value: "Mumbai", label: "مومباي" },
    ],
    Brazil: [{ value: "Sao Paulo", label: "ساو باولو" }],
    Argentina: [{ value: "Buenos Aires", label: "بوينس آيرس" }],
    Australia: [{ value: "Sydney", label: "سيدني" }],
    Turkey: [
      { value: "Ankara", label: "أنقرة" },
      { value: "Istanbul", label: "إسطنبول" },
    ],
    "South Africa": [{ value: "Cape Town", label: "كيب تاون" }],
  };

  async function getPrayerTimes(city, country) {
    if (!city || !country) return;
    try {
      setLoading(true);
      setError("");

      const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=5`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.code !== 200) {
        throw new Error(data.status || "خطأ في استجابة الـ API");
      }

      setTimings(data.data.timings || {});
      // خُد التاريخ اللي حسبه الـ API (هيعرض التاريخ حسب timezone للمدينة)
      setDateReadable(data?.data?.date?.readable || "");
    } catch (e) {
      console.error(e);
      setError("حصل خطأ في جلب مواقيت الصلاة: " + (e.message || ""));
      setTimings({});
      setDateReadable("");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (city && country) {
      getPrayerTimes(city.value, country.value);
    } else {
      // لو مسحت الاختيار نفضي البيانات
      setTimings({});
      setDateReadable("");
    }
  }, [city, country]);

  return (
    <div className="p-8 text-center text-2xl font-bold">
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
      <div
        className={clsx(
          "w-70 m-auto mb-5 mt-5 flex flex-col items-center justify-around gap-4 md:gap-4 xl:flex-row",
          { "pb-40": !city || !country },
        )}
      >
        <Select
          options={optionsCountry}
          placeholder="اختر الدولة"
          value={country}
          onChange={(option) => {
            setCountry(option);
            setCity(null);
          }}
          instanceId="country-select"
          className="w-full"
        />
        <Select
          options={country ? optionsCity[country?.value] : []}
          placeholder="اختر المدينة"
          value={city}
          onChange={(option) => setCity(option)}
          isDisabled={!country}
          className="w-full"
          instanceId="city-select"
        />
      </div>

      {loading && <p>جارِ تحميل مواقيت الصلاة...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {country && city && (
        <div className="opacity-100 transition-all duration-300 ease-in-out">
          <p className="mt-2.5">
            الدولة: {country.label} - المدينة: {city.label}
          </p>

          <p className="mt-1.5 text-lg">التاريخ: {dateReadable || "—"}</p>

          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-10">
            <SalatCard salat={"الفجر"} time={timings?.Fajr} />
            <SalatCard salat={"الظهر"} time={timings?.Dhuhr} />
            <SalatCard salat={"العصر"} time={timings?.Asr} />
            <SalatCard salat={"المغرب"} time={timings?.Maghrib} />
            <SalatCard salat={"العشاء"} time={timings?.Isha} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SalatTimes;
