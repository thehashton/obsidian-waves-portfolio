import React from 'react';
//= Static Data
import data from '@/data/info.json';

function About() {
  return (
    <div className="about section-padding" data-scroll-index="1">
      <div className="cont">
        <h1>
          Hello, I’m <span className="main-color">Harry Ashton</span> a <span className="bord">Front-end Developer<i></i></span> Based in the UK.
        </h1>
      </div>
      <div className="stauts mt-80">
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
              <a href="#0" className="butn butn-md butn-bord radius-5 skew">
                <span>Dwonload C.V</span>
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
  )
}

export default About