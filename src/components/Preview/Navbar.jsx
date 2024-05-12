import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg static pt-10 pb-10">
      <div className="container">
        <a className="logo icon-img-100" href="#">
          <img src="/assets/imgs/logo-light.png" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>
        <div>
          <div className="butn-presv">
            <a href="#0" className="butn butn-sm butn-bg bg-white radius-5 skew">
              <span className="text-dark">Purchase Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar