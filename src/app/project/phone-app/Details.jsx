"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const PhoneAppDetails = () => {
  const [stickyItemWidth, setStickyItemWidth] = useState(undefined);
  const [stickyItemTop, setStickyItemTop] = useState(undefined);

  useEffect(() => {
    const stickyItemEl = document
      .querySelector("#sticky_item")
      .getBoundingClientRect();
    setStickyItemWidth(stickyItemEl.width);
    setStickyItemTop(stickyItemEl.top);
  }, []);

  useEffect(() => {
    if (!stickyItemTop) return;
    window.addEventListener("scroll", isSticky);
    return () => window.removeEventListener("scroll", isSticky);
    // eslint-disable-next-line
  }, [stickyItemTop]);

  function isSticky() {
    const stickyItemEl = document.querySelector("#sticky_item");
    const stickyItemParentEl =
      document.querySelector("#sticky_item").parentElement;

    if (stickyItemParentEl.getBoundingClientRect().top < 0)
      stickyItemEl.classList.add("is-sticky");
    else stickyItemEl.classList.remove("is-sticky");

    if (stickyItemParentEl.getBoundingClientRect().top < -250) {
      stickyItemEl.classList.add("is-positioned");
      stickyItemParentEl.style.position = "relative";
    } else {
      stickyItemEl.classList.remove("is-positioned");
    }
  }

  return (
    <section className="project section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="img mb-80">
              {/*<img src="/assets/imgs/works/project/1.png" alt="" className="radius-5" />*/}
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="cont md-mb50">
                  <h3 className="mb-15 fw-500">The Phone App</h3>
                  <p>
                    A HTML, CSS and Javascript Single Page Application (SPA).
                  </p>
                  <p className="mt-15">
                    An app that that showcases incredible animations, simple
                    responsive designs for a phone app product.
                  </p>
                  <div className="mt-30">
                    <h6 className="mb-15 line-height-28">
                      A Single Page Application (SPA) that helps you build a
                      powerful, scroll animated website built simply in HTML,
                      CSS and JavaScript.
                    </h6>
                    <p>
                      A must have project that anyone should have in their
                      portfolio.
                    </p>
                    <ul className="rest list-arrow mt-50">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">HTML, CSS and JS</h6>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">
                          Single Page Application (SPA)
                        </h6>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">Scroll Animations</h6>
                      </li>
                      <li className="mt-20">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">
                          100% Device Responsiveness
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="info"
                  id="sticky_item"
                  style={{ width: stickyItemWidth }}
                >
                  <ul>
                    <li className="mb-30">
                      <span className="sub-title">
                        <i className="far fa-calendar-alt mr-10"></i> Date :
                      </span>
                      <p>6, July 2024</p>
                    </li>
                    <li className="mb-30">
                      <span className="sub-title">
                        <i className="fas fa-list-ul mr-10"></i> Categories :
                      </span>
                      <p>SPA, Website, HTML, CSS, JS</p>
                    </li>
                    <li className="mb-30">
                      <span className="sub-title">
                        <i className="far fa-user mr-10"></i> Client :
                      </span>
                      <p>FrontendNow</p>
                    </li>
                    <li>
                      <span className="sub-title">
                        <i className="fas fa-globe mr-10"></i> Website :
                      </span>
                      <Link
                        className={"block"}
                        href={"https://fn-phone-app.vercel.app/"}
                      >
                        https://fn-phone-app.vercel.app
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="imgs mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="row md-marg">
                <div className="col-md-6">
                  <div className="img sm-mb30">
                    <img src="/assets/imgs/works/phone-app-1.png" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img">
                    <img src="/assets/imgs/works/phone-app-2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-prev">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="d-flex align-items-center mt-80 pt-80 bord-thin-top">
                <div className="prev">
                  <h6 className="sub-title">
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-left"></i> Prev
                      Project
                    </a>
                  </h6>
                </div>
                <div className="next ml-auto">
                  <h6 className="sub-title">
                    <a href="#">
                      next Project{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneAppDetails;
