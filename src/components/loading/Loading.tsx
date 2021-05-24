import React from 'react';
import './loading.css'
export default function Loading(): JSX.Element {
  return (
    <>
      <div id="wrap">
        <div className="item">
          <div className="spinner1"></div>
          <h5>
            Loading<span className="dot">.</span>
          </h5>
        </div>
      </div>
    </>
  );
}
