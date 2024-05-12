'use client';
import React, { useEffect } from 'react';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function BgImage() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="bg-img main-img-bg" data-background="/assets/imgs/bg.jpg"></div>
  )
}

export default BgImage