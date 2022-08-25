import React from "react";
import "./Nav.css";
import "@fontsource/montserrat"; 

const Nav = () => {
  return (
    <div className="navbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="./Work">Work</a></li>
        <li><a href="./Skill">Skills</a></li>
        <li><a href="./About">About me</a></li>
        <li><a href="./Contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Nav;
