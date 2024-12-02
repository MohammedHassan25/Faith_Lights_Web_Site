import Azkar from "./components/main/azkar.jsx";
import Hadith from "./components/main/hadith.jsx";
import Landing from "./components/main/landing.jsx";
import Salat from "./components/main/salat.jsx";

export default function Home() {
  console.log(Landing)
  return (
    <>
      <Landing />
      <Hadith />
      <Azkar/>
      <Salat/>
    </>
  );
}
