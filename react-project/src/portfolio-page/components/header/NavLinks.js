import React from "react";

// TODO: stopped here
// add hamburger and toggle based on screen size

const NavLinks = () => {
  return (
    <div>
      <ul className="navlinks-list ">
        <li>
          <a href="./">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
