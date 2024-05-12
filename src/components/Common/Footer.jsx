import React from 'react';
//= Static Data
import data from '@/data/app.json';

function Footer() {
  return (
    <footer className="pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <p className="fz-13">
                © {new Date().getFullYear()} Frontend Now is Proudly Powered by <span className="underline main-color"><a href={data.author_link} target="_blank"> {data.theme_author}</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer