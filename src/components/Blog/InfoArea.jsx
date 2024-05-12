import React from 'react';

function InfoArea() {
  return (
    <div className="info-area flex mt-20 pb-20 pt-20 bord-thin-top bord-thin-bottom">
      <div>
        <div className="tags flex">
          <div className="valign">
            <span>Tags :</span>
          </div>
          <div>
            <a href="#">Tech</a>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <div className="share-icon flex">
          <div className="valign">
            <span>Share :</span>
          </div>
          <div>
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com/thehashton"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.tiktok.com/"><i className="fa-brands fa-tiktok"></i></a>
            <a href="https://youtube.com/curious_byte"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoArea