import React from 'react';
import {Link} from 'react-router-dom';

type PropsT = {
  headline: string,
}
export default function HeadlineWithInsertButton({headline}: PropsT): JSX.Element {
  return (
    <>
      <div className="grid">
        <h1 className="grid--cell fl1 fs-headline1">{headline}</h1>
        <div className="ml12 aside-cta grid--cell print:d-none">
          <Link className="ws-nowrap s-btn s-btn__filled" to={'/insert'}>
            {'✚ New Coding Convention'}
          </Link>
        </div>
      </div>
    </>
  );
}
