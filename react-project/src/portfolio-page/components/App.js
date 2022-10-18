import React from "react";
import Navbar from "./header/Navbar";
import HomeHero from "./hero/HomeHero";
import About from "./about/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <About />
    </div>
  );
};

export default App;
