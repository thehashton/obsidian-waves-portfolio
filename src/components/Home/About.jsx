import React from 'react';
//= Static Data
import data from '@/data/info.json';
import DotsPattern from "@/components/DotsPattern/DotsPattern";

function About() {
  return (
    <div className="about pt-40" data-scroll-index="1">
        <div className="!max-w-[400px] m-auto block md:hidden">
            <img className={'border-transparent rounded-t-full bg-orange-500 mb-30'} src={data.picture} alt="" />
        </div>
      <div className="cont">
          <h1>
          <span className="main-color font-bold">Harry Ashton</span> a <span className="bord">Front-end Developer<i></i></span> Based in the UK.
        </h1>
      </div>
        <div className={'py-4'}><DotsPattern /></div>
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
              <a href="#0" className="butn butn-md butn-bord radius-5 skew">
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
  )
}

export default About