import React from "react";
//= Components
import Author from "./Author";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import Script from "next/script";

function MainBox() {
  return (
    <section className="box" data-scroll-index={"0"}>
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-7 offset-lg-1">
            <About />
            {/*<Resume />*/}
            <Skills />
          </div>
          <div className="!hidden md:!block col-lg-4">
            <Author />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBox;
