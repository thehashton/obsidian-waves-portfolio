'use client';
import React, { useEffect } from 'react';

function Waves() {
  useEffect(() => {
    loadAnimations();
  }, []);

  function loadAnimations() {
    const interval = setInterval(async () => {
      if (typeof THREE !== 'undefined') {
        const startWavesAnimations = (await import('@/common/waves')).default;
        startWavesAnimations();
        clearInterval(interval);
      }
    }, 100);
  }

  return (
    <div id="home_wave"></div>
  )
}

export default Waves