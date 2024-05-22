"use client";
import React, { useState, useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (navActive) {
      body.classList.add("nav-active");
    } else {
      body.classList.remove("nav-active");
    }
  }, [navActive]);

  const scrollToSection = (event) => {
    event.preventDefault();
    let sectionIndex = event.currentTarget.getAttribute("data-scroll-nav");
    let section = document.querySelector(
      `[data-scroll-index="${sectionIndex}"]`,
    );

    if (section) {
      setTimeout(() => {
        section.scrollIntoView();
        setNavActive(false); // Close the menu after scrolling
      }, 500);
    } else {
      setNavActive(false); // Close the menu if section is not found
    }
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleNav}>
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>

      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="/" data-scroll-nav="0" onClick={scrollToSection}>
                Home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#1" data-scroll-nav="1" onClick={scrollToSection}>
                About
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#3" data-scroll-nav="3" onClick={scrollToSection}>
                Projects
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#contact" data-scroll-nav="4" onClick={scrollToSection}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
