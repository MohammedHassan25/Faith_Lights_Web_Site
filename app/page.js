import AzkarSection from "./components/MainPage/AzkarSection.jsx";
import Hadith from "./components/MainPage/Hadith.jsx";
import Landing from "./components/MainPage/Landing.jsx";
import SalatSection from "./components/MainPage/SalatSection.jsx";



export default function Home() {
  console.log(Landing)
  return (
    <>
      <Landing />
      <Hadith />
      <AzkarSection />
      <SalatSection />
    </>
  );
}
