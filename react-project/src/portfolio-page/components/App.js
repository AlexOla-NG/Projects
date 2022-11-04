import React from "react";
import Navbar from "./header/Navbar";
import HomeHero from "./hero/HomeHero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
