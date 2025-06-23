import AzkarSection from "./components/main/AzkarSection.jsx";
import Hadith from "./components/main/Hadith.jsx";
import Landing from "./components/main/Landing.jsx";
import SalatSection from "./components/main/SalatSection.jsx";



export default function Home() {
  console.log(Landing)
  return (
    <>
      <Landing />
      <Hadith />
      <AzkarSection/>
      <SalatSection/>
    </>
  );
}
