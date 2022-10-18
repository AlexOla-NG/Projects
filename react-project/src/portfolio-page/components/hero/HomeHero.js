import React from "react";
import "./hero.css";

const HomeHero = () => {
  return (
    <section className="hero-section-wrapper">
      <div className="article">
        <h1>hey, i'm alexander oweka</h1>
        <p>
          A Front End Developer with an eye for design and deep understanding of
          usability goals.
        </p>
      </div>
      <button className="btn">
        <a href="#projects">projects</a>
      </button>
    </section>
  );
};

export default HomeHero;
