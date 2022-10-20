import React from "react";

const MoreInfo = () => {
  return (
    <article className="more-info-wrapper">
      <h3>get to know me!</h3>
      <p>
        I'm a <b>Frontend Developer</b> passionate about building responsive UI
        & Web Applications that lead to the success of the overall product. You
        can check out some of my work in the <b>Projects</b> section.
        <br />
        <br />I like retweeting memes on twitter, but I also like sharing
        content related to the stuff that I have learned over the years in{" "}
        <b>Web Development</b>. I do this to help other people in the Dev
        Community. Feel free to Connect or Follow me on my{" "}
        <a
          href="https://www.linkedin.com/in/alexander-oweka-6bb086166/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>{" "}
        where I post useful content related to Web Development and Programming;
        here's my{" "}
        <a
          href="https://twitter.com/OwekaAlexander"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        , in case you like memes 😜.
        <br />
        <br />
        I'm open to <b>Job</b> opportunities where I can contribute, learn and
        grow. If you have a good opportunity that matches my skills and
        experience, please don't hesitate to <b>contact</b> me.
      </p>
      <button className="btn">
        <a href="#contact">contact</a>
      </button>
    </article>
  );
};

export default MoreInfo;
