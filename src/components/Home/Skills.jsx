"use client";
import React, { useEffect, useRef } from "react";
import data from "@/data/info.json";

function Skills() {
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    skillsRef.current.forEach((skill) => {
      if (skill) {
        observer.observe(skill);
      }
    });

    return () => {
      if (skillsRef.current) {
        skillsRef.current.forEach((skill) => {
          if (skill) {
            observer.unobserve(skill);
          }
        });
      }
    };
  }, []);

  return (
    <div className="skills section-padding pt-40" data-scroll-index="1">
      <div className="sec-head bord-thin-bottom pb-20 mb-80">
        <h4 className="sub-title fz-28">Skills</h4>
      </div>
      <div className="row justify-content-center">
        {data.skills.map((item, index) => (
          <div
            className="col-6 col-sm-4 mb-30"
            key={item.id}
            ref={(el) => (skillsRef.current[index] = el)}
          >
            <div className={`item`} style={{ padding: '20px', minHeight: '100px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: '16px', flexWrap: 'nowrap', width: '100%' }}>
                <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="img icon-img-40">
                    <img src={item.logo} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  </div>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <h6 className="fz-18" style={{ margin: 0, lineHeight: '1.4', fontSize: '15px', textAlign: 'center' }}>
                    {item.title}
                  </h6>
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
