import React from 'react';
//= Static Data
import data from '@/data/info.json';

function Resume() {
  return (
    <div className="resume section-padding pt-0" data-scroll-index="1">
      <div className="sec-head bord-thin-bottom pb-20 mb-80">
        <h4 className="sub-title fz-28">Resume</h4>
      </div>
      {data.resume.map((item, index) => (
        <div className={`item d-flex align-items-center ${index !== data.resume.length - 1 ? 'mb-30' : ''}`} key={item.id}>
          <div className="date mr-60">
            <p className="fz-13">{item.duration}</p>
          </div>
          <div>
            <h6><a href="#0">{item.company}</a></h6>
          </div>
          <div className="ml-auto">
            <div className="d-flex align-items-center">
              <div className="icon-img-40 mr-100">
                <img src={item.logo} alt="" />
              </div>
              <div className="arrow">
                <a href="#">
                  <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 34.2 32.3" xmlSpace="preserve"
                    style={{ strokeWidth: 2 }}>
                    <line x1="0" y1="16" x2="33" y2="16"></line>
                    <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                    <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Resume