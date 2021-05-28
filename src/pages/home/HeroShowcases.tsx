import React from 'react';

export default function HeroShowcases(): JSX.Element {
  return (
    <div className="grid grid__allcells3 jc-center px12 md:fd-column pt32 pb64 sm:pb128 wmx9 mx-auto">
      <div className="grid--cell py32 md:pt16 md:pb16">
        <div className="fs-title p-ff-roboto-slab-bold mb4">same rules</div>
        <div className="fc-black-300 fs-body2 px24">
          easy for other colleagues to understand
        </div>
      </div>
      <div className="grid--cell py32 md:pt16 md:pb16">
        <div className="fs-title p-ff-roboto-slab-bold mb4">cleanness</div>
        <div className="fc-black-300 fs-body2 px24">
          simply speeds up the code review
        </div>
      </div>
      <div className="grid--cell py32 md:pt16 md:pb16">
        <div className="fs-title p-ff-roboto-slab-bold mb4">individual</div>
        <div className="fc-black-300 fs-body2 px24">
          build for individual project within individual team
        </div>
      </div>
      <div className="grid--cell py32 md:pt16 md:pb16">
        <div className="fs-title p-ff-roboto-slab-bold mb4">sharing</div>
        <div className="fc-black-300 fs-body2 px24">
          find best practice and share others your best
        </div>
      </div>
    </div>
  );
}
