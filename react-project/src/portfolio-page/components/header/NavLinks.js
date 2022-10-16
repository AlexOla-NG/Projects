import React from "react";
import "./navlinks.css";

// TODO: stopped here
// add hamburger and toggle based on screen size

const NavLinks = () => {
  // STUB: pop out drawer onclick
  const toggleHamburger = () => {
    document.body.classList.toggle("nav-open");
  };

  return (
    <div>
      {/* desktop screen */}
      <div className="navlinks-list-desktop">
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

      {/* mobile screen */}
      <div className="nav">
        <button className="nav__toggle" onClick={toggleHamburger}>
          <span className="hamburger"></span>
        </button>
        <ul className="navlinks-list nav__list">
          <li className="nav__item">
            <a href="./" className="nav__link">
              home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              about
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">
              projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              contact
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="navlinks-list-mobile">
        <button type="button" class="hamburger">
          Menu
        </button>
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
      </div> */}
    </div>
  );
};

export default NavLinks;
