import React from 'react';
//= Static Data
import data from '@/data/services.json';

function Services() {
  return (
    <section className="services section-padding pt-40" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-head bord-thin-bottom pb-20 mb-80">
              <h4 className="sub-title fz-28">Services</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={item.id}>
              <div className={`item ${index !== data.length - 1 ? 'md-mb30' : ''}`}>
                <h3 className="letr">{item.letter}</h3>
                <h6>{item.title}</h6>
                <p>{item.details}</p>
                <div className="tags">
                  {item.tags.map(tag => (
                    <a href="#0" key={tag}>{tag}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services