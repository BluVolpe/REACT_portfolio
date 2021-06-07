import React from "react";
import './header.css';

function Header() {
  return (
    <header>
      <h1>Blu Volpe</h1>
      <nav>
        <a href="#about">About Me</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact Me</a>
        <a href="#">Resume</a>
      </nav>
    </header>
  );
}

export default Header;