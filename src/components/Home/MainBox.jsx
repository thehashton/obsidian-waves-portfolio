import React from 'react';
//= Components
import Author from './Author';
import About from './About';
import Resume from './Resume';
import Skills from './Skills';

function MainBox() {
  return (
    <section className="box">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-4">
            <Author />
          </div>
          <div className="col-lg-7 offset-lg-1">
            <About />
            {/*<Resume />*/}
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainBox