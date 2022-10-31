import React from "react";
import Navbar from "./header/Navbar";
import HomeHero from "./hero/HomeHero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
