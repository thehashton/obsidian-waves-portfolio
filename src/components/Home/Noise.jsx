'use client';
import React, { useEffect } from 'react';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Noise() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="bg-img noise-bg" data-background="/assets/imgs/patterns/noise1.png"></div>
  )
}

export default Noise