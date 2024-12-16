import AzkarSection from "./components/main/azkarSection.jsx";
import Hadith from "./components/main/hadith.jsx";
import Landing from "./components/main/landing.jsx";
import SalatSection from "./components/main/salatSection.jsx";



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
