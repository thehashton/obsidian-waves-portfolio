import React from 'react';

function Liquid() {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src="/assets/vid/liquid.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Liquid