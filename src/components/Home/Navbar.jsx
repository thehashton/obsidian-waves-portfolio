"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Menu from "@/components/Home/Menu";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 350) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function scrollToSection(event) {
    event.preventDefault();
    let sectionIndex = event.currentTarget.getAttribute("data-scroll-nav");
    let section = document.querySelector(
      `[data-scroll-index="${sectionIndex}"]`,
    );

    if (section) {
      setTimeout(() => {
        section.scrollIntoView();
      }, 500);
    }
  }

  useEffect(() => {
    let elements = document.querySelectorAll(".rolling-text");

    elements.forEach((element) => {
      let innerText = element.innerText;
      element.innerHTML = "";

      let textContainer = document.createElement("div");
      textContainer.classList.add("block");

      for (let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.remove("play");
      });
    });
  }, []);

  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg static">
      <div className="container">
        <a className="logo" href="/" style={{ width: "175px" }}>
          <img src="/assets/imgs/logo-light.png" alt="logo" />
        </a>
        <Menu />
        {/*<button*/}
        {/*  onClick={() => setShowNav((prev) => !prev)}*/}
        {/*  className="navbar-toggler"*/}
        {/*  type="button"*/}
        {/*  data-toggle="collapse"*/}
        {/*  data-target="#navbarSupportedContent"*/}
        {/*  aria-controls="navbarSupportedContent"*/}
        {/*  aria-expanded="false"*/}
        {/*  aria-label="Toggle navigation"*/}
        {/*>*/}
        {/*  <span className="icon-bar">*/}
        {/*    <i className="fas fa-bars"></i>*/}
        {/*  </span>*/}
        {/*</button>*/}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            showNav === true ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                data-scroll-nav="0"
                // onClick={scrollToSection}
              >
                <span className="rolling-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#1"
                data-scroll-nav="1"
                onClick={scrollToSection}
              >
                <span className="rolling-text">About</span>
              </a>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <a*/}
            {/*    className="nav-link"*/}
            {/*    href="#0"*/}
            {/*    data-scroll-nav="2"*/}
            {/*    onClick={scrollToSection}*/}
            {/*  >*/}
            {/*    <span className="rolling-text">Services</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#0"
                data-scroll-nav="3"
                onClick={scrollToSection}
              >
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <a*/}
            {/*    className="nav-link"*/}
            {/*    href="#0"*/}
            {/*    data-scroll-nav="4"*/}
            {/*    onClick={scrollToSection}*/}
            {/*  >*/}
            {/*    <span className="rolling-text">Testimonials</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <a*/}
            {/*    className="nav-link"*/}
            {/*    href="#0"*/}
            {/*    data-scroll-nav="5"*/}
            {/*    onClick={scrollToSection}*/}
            {/*  >*/}
            {/*    <span className="rolling-text">Blog</span>*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#0"
                data-scroll-nav="6"
                onClick={scrollToSection}
              >
                <span className="rolling-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md-hide">
          <div className="butn-presv">
            <a
              href="#0"
              className="butn butn-sm butn-bg radius-5 skew !border-orange-500 !bg-orange-500 !text-lg"
            >
              <span className="text-dark">Hire Me!</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
