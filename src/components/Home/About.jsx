import React from "react";
import data from "@/data/info.json";
import DotsPattern from "@/components/DotsPattern/DotsPattern";
import ThreeJSAnimation from "@/components/ThreeJSAnimation";

function About() {
  return (
    <div className="about pt-40" data-scroll-index="1" id={"about"}>
      {" "}
      <div className={"py-4 hidden lg:block"}>
        <DotsPattern />
      </div>
      {/*<div*/}
      {/*  className="author-profile relative md:author-profile lg:!flex hidden !w-full !max-w-[360px] rounded-full pt-80 pb-80"*/}
      {/*  // id="sticky_item"*/}
      {/*  style={{ width: "auto" }}*/}
      {/*>*/}
      {/*  <div className="cont">*/}
      {/*    <div className="img">*/}
      {/*      <img src={data.picture} alt="" />*/}
      {/*    </div>*/}
      {/*    <div className="info text-center mt-30">*/}
      {/*      <h5>{data.name}</h5>*/}
      {/*      <p>*/}
      {/*        <a href="#0">{data.username}</a>*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="social text-center mt-20">*/}
      {/*      /!*<a href="#0">*!/*/}
      {/*      /!*  <i className="fab fa-behance"></i>*!/*/}
      {/*      /!*</a>*!/*/}
      {/*      <a href="https://twitter.com/TheHashton">*/}
      {/*        <i className="fa-brands fa-x-twitter"></i>*/}
      {/*      </a>*/}
      {/*      <a href="https://tiktok.com/@thehashton">*/}
      {/*        <i className="fa-brands fa-tiktok"></i>*/}
      {/*      </a>*/}
      {/*      <a href="https://www.linkedin.com/in/harry-ashton-b0b15b30/">*/}
      {/*        <i className="fab fa-linkedin-in"></i>*/}
      {/*      </a>*/}
      {/*      /!*<a href="#0">*!/*/}
      {/*      /!*  <i className="fab fa-dribbble"></i>*!/*/}
      {/*      /!*</a>*!/*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  /!*<ThreeJSAnimation />*!/*/}
      {/*</div>*/}
      {/*<div className="!max-w-[400px] m-auto block lg:hidden">*/}
      {/*  <img*/}
      {/*    className={"border-transparent rounded-t-full bg-orange-500 mb-30"}*/}
      {/*    src={data.picture}*/}
      {/*    alt=""*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="flex flex-wrap cont">
        <h1 className={"text-5xl"}>
          Hi, I'm <span className="main-color font-bold">Harry Ashton</span> a{" "}
          <span className="bord">
            Front-end Developer<i></i>
          </span>
          who loves making great UI 💻
        </h1>
      </div>
      <div className="stauts mt-10">
        <div className="d-flex align-items-center">
          {/*<div className="mr-40">*/}
          {/*  <div className="d-flex align-items-center">*/}
          {/*    <h2>{data.years_of_experance}</h2>*/}
          {/*    <p>Years <br /> of Experance</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="mr-40">*/}
          {/*  <div className="d-flex align-items-center">*/}
          {/*    <h2>{data.clients}</h2>*/}
          {/*    <p>Clients <br /> Worldwide</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div>
            <div className="butn-presv">
              <a
                href="#0"
                className="butn butn-md butn-bord radius-5 skew !border-orange-500 text-xl"
              >
                <span>Download C.V</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text mt-80">
        <h6 className="sub-title mb-15">About Me.</h6>
        <p className="fz-20">{data.brief}</p>
      </div>
    </div>
  );
}

export default About;
