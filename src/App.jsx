import { useRef } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/nav"
import Work from "./components/Work"




function App() {
  
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#222831]">
       <NavBar 
       scrollToSection={scrollToSection} 
       heroRef={heroRef} 
       aboutRef={aboutRef} 
       workRef={workRef} 
       contactRef={contactRef} />


      <section ref={heroRef}><Hero /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={workRef}><Work /></section>
      <section ref={contactRef}><Contact /></section>
      

      <Footer scrollToSection={scrollToSection} heroRef={heroRef} aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
    </div>
  )
}

export default App
