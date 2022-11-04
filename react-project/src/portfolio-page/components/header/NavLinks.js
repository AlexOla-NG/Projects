import React from "react";
import "./navlinks.css";

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
            <a href="./" className="nav__link">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="nav__link">
              about
            </a>
          </li>
          <li>
            <a href="#projects" className="nav__link">
              projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav__link">
              contact
            </a>
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
    </div>
  );
};

export default NavLinks;
