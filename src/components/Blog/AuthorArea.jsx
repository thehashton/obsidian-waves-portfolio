import React from 'react';

function AuthorArea() {
  return (
    <div className="author-area mt-50">
      <div className="flex">
        <div className="author-img mr-30">
          <div className="img">
            <img src="/assets/imgs/blog/author1.jpg" alt="" className="circle-img" />
          </div>
        </div>
        <div className="cont valign">
          <div className="full-width">
            <h6 className="fw-500 mb-10">Chris Smith</h6>
            <p>Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorArea