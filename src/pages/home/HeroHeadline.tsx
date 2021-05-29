import React from 'react';
import {Link} from 'react-router-dom';

export default function HeroHeadline(): JSX.Element {
  return (
    <>
      <h1 className="p-ff-roboto-slab-bold fs-display2 mb0 pt64 pb64 ps-relative z-active">
        <span>We take care of coding</span>
        <br />
        <span className="fc-orange-500 lg:d-block mx-auto ta-center">
          Quality
        </span>
        <span>{' & '}</span>
        <span className="fc-orange-500 lg:d-block mx-auto ta-center">
          Standard
        </span>
      </h1>
      <Link
        to={'/convention/newest'}
        className="s-btn w100 wmx2 fs-body2 px32 py16 mb48 bar-md bg-orange-600 h:bg-orange-500 fc-white d:fc-black-900 p-ff-source-bold mt-auto"
      >
        Get Started
      </Link>
    </>
  );
}
