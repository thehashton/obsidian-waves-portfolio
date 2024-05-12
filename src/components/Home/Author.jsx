'use client';
import React, { useEffect, useState } from 'react';
//= Static Data
import data from '@/data/info.json';

function Author() {
  const [stickyItemWidth, setStickyItemWidth] = useState(undefined);
  const [stickyItemTop, setStickyItemTop] = useState(undefined);
  function isSticky() {
    const stickyItemEl = document.querySelector('#sticky_item');
    const stickyItemParentEl =
      document.querySelector('#sticky_item').parentElement;
    const scrollTop = window.scrollY;

    if (scrollTop >= stickyItemTop) stickyItemEl.classList.add('is-sticky');
    else stickyItemEl.classList.remove('is-sticky');

    if (
      scrollTop >= stickyItemTop &&
      stickyItemParentEl.getBoundingClientRect().top < -775
    ) {
      stickyItemEl.classList.add('is-positioned');
      stickyItemParentEl.style.position = 'relative';
    } else {
      stickyItemEl.classList.remove('is-positioned');
    }
  }
  useEffect(() => {
    const stickyItemEl = document
      .querySelector('#sticky_item')
      .getBoundingClientRect();
    setStickyItemWidth(stickyItemEl.width);
    setStickyItemTop(stickyItemEl.top);
  }, []);

  useEffect(() => {
    if (!stickyItemTop) return;
    window.addEventListener('scroll', isSticky);
    return () => window.removeEventListener('scroll', isSticky);
    // eslint-disable-next-line
  }, [stickyItemTop]);

  return (
    <div
      className="author-profile pt-80 pb-80"
      id="sticky_item"
      style={{ width: stickyItemWidth }}
    >
      <div className="cont">
        <div className="img">
          <img src={data.picture} alt="" />
        </div>
        <div className="info text-center mt-30">
          <h5>{data.name}</h5>
          <p>
            <a href="#0">{data.username}</a>
          </p>
        </div>
        <div className="social text-center mt-20">
          {/*<a href="#0">*/}
          {/*  <i className="fab fa-behance"></i>*/}
          {/*</a>*/}
          <a href="https://twitter.com/TheHashton">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#tiktok">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://www.linkedin.com/in/harry-ashton-b0b15b30/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/*<a href="#0">*/}
          {/*  <i className="fab fa-dribbble"></i>*/}
          {/*</a>*/}
        </div>
      </div>
    </div>
  );
}

export default Author;
