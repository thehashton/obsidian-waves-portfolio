import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/preview.json';

function MainBox() {
  return (
    <section className="preview section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <div className="screen">
                <Link href="/home-main" target="_blank">
                  <img src="/assets/imgs/demos/1.png" alt="" />
                </Link>
              </div>
              <div className="botm"></div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="info">
              <h2 className="fw-300">CV , Resume and Personal Portfolio One Page <span className="main-color">React Template</span></h2>
              <div className="mt-50 text-center inline">
                <div className="butn-presv">
                  <Link href="/home-main" className="butn butn-md butn-bord hover-color radius-5 skew" target="_blank">
                    <span>Main Demo Preview <img src="/assets/imgs/svg-assets/arrow-right-top.svg" alt="" className="icon-img ml-10" /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-80 justify-content-center">
          {data.map(item => (
            <div className="col-lg-9" key={item.id}>
              <div className="demo-item text-center mt-50">
                <Link href={item.link} target="_blank">
                  <img src={item.image} alt="" />
                  <h6 className="fz-18 mt-30">{item.title}</h6>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainBox