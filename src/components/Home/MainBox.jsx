import React from "react";
//= Components
import Author from "./Author";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import { ScrollIndicator } from "@/components/Home/ScrollIndicator";

function MainBox() {
  return (
    <section className="box relative" data-scroll-index={"0"}>
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-7 offset-lg-1">
            <ScrollIndicator />
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
