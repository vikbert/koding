import React from 'react';

export default function StepLoadingMessage(): JSX.Element {
  return (
    <>
      <div className="js-post-review-summary">
        <div className="js-loading-message d-none">
          <p className="mb0">Loading…</p>
        </div>
      </div>
    </>
  );
}
