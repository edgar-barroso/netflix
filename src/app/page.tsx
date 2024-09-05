import { Header } from "./components/LandingPage/Header";
import { Footer } from "./components/Footer";
import { Section1 } from "./components/LandingPage/Sections/Section1";
import { Section2 } from "./components/LandingPage/Sections/Section2";
import { Section3 } from "./components/LandingPage/Sections/Section3";
import { Section4 } from "./components/LandingPage/Sections/Section4";

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 left-0 h-[100vh] w-[10vw] bg-gradient-to-r from-[#00000093] to-transparent overflow-y-clip z-50 pointer-events-none " />
      <div className="fixed top-0 right-0  h-[100vh] w-[10vw] bg-gradient-to-l from-[#00000093] to-transparent overflow-y-clip z-50  pointer-events-none" />
      <Header fixed />
      <Section1 />
      <div className="relative overflow-x-clip h-[6rem] -mt-24 bg-transparent">
        <div className="absolute custom-gradient h-[18rem] w-[150vw] -left-[25%] rounded-t-[50%]" />
        <div className="top-[6px] absolute bg-black h-[18rem] w-[150vw] -left-[25%]  rounded-t-[47%]" />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}
