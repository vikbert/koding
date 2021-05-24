import React from 'react';
import './loading.css';

export default function LoadingContent(): JSX.Element {
  return (
    <div className="grid ai-center jc-center gs32 md:fd-column mt128">
      <div id="wrap">
        <div className="item">
          <div className="spinner"/>
          <h5>
            Loading<span className="dot">.</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
