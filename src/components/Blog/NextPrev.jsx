import React from 'react';
import Link from 'next/link';

function NextPrev() {
  return (
    <div className="next-prv-post flex mt-50">
      <div className="thumb-post bg-img" data-background="/assets/imgs/blog/1.jpg">
        <Link href="/blog-details">
          <span className="fz-12 text-u ls1 main-color mb-15"><i className="pe-7s-angle-left"></i>
            Prev Post</span>
          <h6 className="fw-500 fz-16">Ways to quickly traffic to <br /> your website.
          </h6>
        </Link>
      </div>
      <div className="thumb-post ml-auto text-right bg-img" data-background="/assets/imgs/blog/2.jpg">
        <Link href="/blog-details">
          <span className="fz-12 text-u ls1 main-color mb-15">Next Post <i
            className="pe-7s-angle-right"></i></span>
          <h6 className="fw-500 fz-16">How to Handle Your Good Employee.</h6>
        </Link>
      </div>
    </div>
  )
}

export default NextPrev