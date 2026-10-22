import Navbar from "../app/components/NavBar";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Skills from "../app/components/Skills";
import Projects from "../app/components/Projects";
import Experience from "../app/components/Experience";
import Contact from "../app/components/Contact";
// import Marquee from "../app/components/Marquee";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Marquee /> */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}