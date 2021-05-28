import React from 'react';

export default function BackgroundSquare(): JSX.Element {
  return (
    <>
      <span
        aria-hidden="true"
        className="p-bits fc-blue-800 tn8 l16 w128 h128 z-base"
      />
      <span
        aria-hidden="true"
        className="p-bits fc-gold sm:d-none t128 l128 w64 h64"
      />
      <span
        aria-hidden="true"
        className="p-bits fc-green-500 t50 ln16 w64 h64"
      />
      <span aria-hidden="true" className="p-bits fc-blue-200 b0 l128 w24 h24" />
      <span
        aria-hidden="true"
        className="p-bits fc-blue-300 tn12 r128 w128 h128 z-base"
      />
      <span
        aria-hidden="true"
        className="p-bits p-fc-purple sm:d-none t64 r128 w32 h32"
      />
      <span
        aria-hidden="true"
        className="p-bits fc-orange-500 sm:d-none t50 r0 w128 h128"
      />
      <span
        aria-hidden="true"
        className="p-bits fc-yellow-400 b32 r128 w24 h24"
      />
    </>
  );
}
