import React from "react";
import Navbar from "./header/Navbar";
import HomeHero from "./hero/HomeHero";
import About from "./about/About";
import Projects from "./projects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
