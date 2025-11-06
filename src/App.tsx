import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechnicalExpertise from "./sections/TechnicalExpertise";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0f1117] via-[#0b0d13] to-[#090a0f]">

      <Navbar />
      <Hero />
      <Experience/>
      <Projects />
      <Education/>
      <TechnicalExpertise/>
      <Contact/>
    </div>
  );
}
