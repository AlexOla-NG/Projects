import React from "react";
import "./navbar.css";
import Avatar from "./Avatar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="header">
      <Avatar />
      <NavLinks />
    </header>
  );
};

export default Navbar;
