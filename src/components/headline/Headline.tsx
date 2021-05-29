import React from 'react';

type PropsT = {
  headline: string;
};

export default function Headline({headline}: PropsT): JSX.Element {
  return (
    <>
      <div className="grid">
        <h1 className="grid--cell fl1 fs-headline1">{headline}</h1>
      </div>
    </>
  );
}
