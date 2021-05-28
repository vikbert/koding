import React from 'react';

export default function HeroHeadline(): JSX.Element {
  return (
    <>
      <h1 className="p-ff-roboto-slab-bold fs-display2 mb0 pt64 pb64 ps-relative z-active">
        <span>We take care of</span>
        <br />
        <span className="fc-orange-500 lg:d-block mx-auto ta-center">
          Code Quality
        </span>
        <span>{' & '}</span>
        <span className="fc-orange-500 lg:d-block mx-auto ta-center">
          Coding Standard
        </span>
      </h1>
    </>
  );
}
