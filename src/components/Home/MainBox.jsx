"use client";

import React from "react";
//= Components
import Author from "./Author";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import { ScrollIndicator } from "@/components/Home/ScrollIndicator";
import dynamic from "next/dynamic";

// Dynamically import the ThreeJSAnimation component to ensure it only loads on the client-side
const ThreeJSAnimation = dynamic(
  () => import("@/components/ThreeJSAnimation"),
  { ssr: false },
);

function MainBox() {
  return (
    <section
      className="box relative"
      data-scroll-index={"0"}
      id={"home"}
      style={{ position: "relative" }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row md-marg">
          <div className="col-lg-7">
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
