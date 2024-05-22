"use client";
import React, { useEffect } from "react";
import data from "@/data/info.json";
import isInView from "@/common/isInView";

function Skills() {
  useEffect(() => {
    isInView({
      selector: ".progres",
      isElements: true,
      callback: (element) => {
        element.style.width = element.dataset.value;
      },
      whenOutOfView: (element) => {
        element.style.width = 0;
      },
    });
  }, []);

  return (
    <div className="skills section-padding pt-40" data-scroll-index="1">
      <div className="sec-head bord-thin-bottom pb-20 mb-80">
        <h4 className="sub-title fz-28">Skills</h4>
      </div>
      <div className="row">
        {data.skills.map((item, index) => (
          <div className="col-md-4 col-sm-6 mb-30" key={item.id}>
            <div className={`item`}>
              <div className="d-flex align-items-center mb-30">
                <div className="mr-30">
                  <div className="img icon-img-40">
                    <img src={item.logo} alt="" />
                  </div>
                </div>
                <div>
                  <h6 className="fz-18">{item.title}</h6>
                </div>
              </div>
              {/*<div className="skill-progress">*/}
              {/*  <span className="progres" data-value={item.percent}></span>*/}
              {/*</div>*/}
              {/*<span className="value">{item.percent}</span>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
