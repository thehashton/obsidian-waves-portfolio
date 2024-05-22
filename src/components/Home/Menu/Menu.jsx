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

  return (
    <>
      <div className="menu-icon mr-4" onClick={toggleNav}>
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>

      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list text-black">
            <li className="nav__list-item">Home</li>
            <li className="nav__list-item">About</li>
            <li className="nav__list-item">Projects</li>
            <li className="nav__list-item">Contact</li>
          </ul>
        </div>
      </div>

      {/*<div className="site-content"></div>*/}
    </>
  );
};

export default Menu;
