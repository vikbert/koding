import React from 'react';
import {Link} from 'react-router-dom';

export default function HeadlineHome(): JSX.Element {
  return (
    <>
      <div className="grid">
        <h1 className="grid--cell fl1 fs-headline1">
          Top 20 Coding Conventions
        </h1>
        <div className="ml12 aside-cta grid--cell print:d-none">
          <Link className="ws-nowrap s-btn s-btn__filled" to={'/insert'}>
            New Coding Convention
          </Link>
        </div>
      </div>
    </>
  );
}
