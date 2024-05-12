import React from 'react';

function Comments() {
  return (
    <div className="comments-post section-padding">
      <div className="sec-head mb-60">
        <h5>comments (2)</h5>
      </div>
      <div className="item-box bord-thin-bottom pb-30 mb-30">
        <div className="flex">
          <div className="user-img mr-30">
            <div className="img circle-60 line-height-1">
              <img src="/assets/imgs/blog/author1.jpg" alt="" className="circle-img" />
            </div>
          </div>
          <div className="cont">
            <h6 className="mb-10">Megan fox</h6>
            <p>Ut elementum turpis lorem, id vulputate risus consequat vitae. Morbi eget
              urna imperdiet, pellentesque nulla id, tempus mauris.</p>
          </div>
        </div>
        <div className="replay-butn">
          <a href="#0">
            <span>Replay</span>
          </a>
        </div>
      </div>
      <div className="item-box replayed">
        <div className="flex">
          <div className="user-img mr-30">
            <div className="img circle-60 line-height-1">
              <img src="/assets/imgs/blog/author1.jpg" alt="" className="circle-img" />
            </div>
          </div>
          <div className="cont">
            <h6 className="mb-10">Megan fox</h6>
            <p>Ut elementum turpis lorem Morbi eget urna imperdiet, pellentesque nulla
              id, tempus mauris.</p>
          </div>
        </div>
        <div className="replay-butn">
          <a href="#0">
            <span>Replay</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Comments