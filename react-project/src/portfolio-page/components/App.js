import React from "react";
import Navbar from "./header/Navbar";
import HomeHero from "./hero/HomeHero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

// TODO: stopped here
// add effects (hover, focus) to: clickable elements, buttons,

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
