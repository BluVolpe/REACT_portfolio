import React from "react";
import './header.css';

function Header() {
  return (
    <header>
      <h1 className="myName">David Volpe</h1>
      <nav>
        <a href="#about">About Me</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact Me</a>
        <a href="https://docs.google.com/document/d/1_mcMP2gXawqt3XsfGJbXuEi_mga_-1Evwz8h0Za9lHU/edit#heading=h.y7d3xdxnr44m">Resume</a>
      </nav>
    </header>
  );
}

export default Header;