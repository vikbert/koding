import React from 'react';

export default function SnippetPreview() {
  return (
      <>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>bad code</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
            <div className="flip-card-back">
              <h1>good code</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </>
  )
}
