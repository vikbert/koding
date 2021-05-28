import React from 'react';
import {Link} from 'react-router-dom';

export default function HeroFooter(): JSX.Element {
  return (
    <>
      <section className="py32 ta-center fs-body3 grid ai-center jc-center sm:fd-column my32">
        <svg
          aria-hidden="true"
          className="grid--cell svg-spot spotLock"
          width={48}
          height={48}
          viewBox="0 0 48 48"
        >
          <path
            opacity=".2"
            d="M12 22a2 2 0 00-2 2v19a4 4 0 004 4h24a4 4 0 004-4V26a4 4 0 00-4-4H12zm6 7a5 5 0 117.67 4.23l.05.35c.15.84.36 1.8.61 2.86A2.06 2.06 0 0124.35 39h-2.7a2.06 2.06 0 01-1.98-2.56c.29-1.2.52-2.3.66-3.2l-.19-.14A5 5 0 0118 29z"
          />
          <path d="M23 24a5 5 0 00-2.86 9.1l.2.13c-.15.91-.38 2-.67 3.21A2.06 2.06 0 0021.65 39h2.7c1.32 0 2.3-1.26 1.98-2.56a46.74 46.74 0 01-.6-2.86l-.06-.35A5 5 0 0023 24zm0 2a3 3 0 011.76 5.43l-.16.11a2 2 0 00-.91 2c.16.98.4 2.12.7 3.37.01.05-.02.09-.04.09h-2.7c-.02 0-.05-.04-.04-.09.3-1.25.54-2.4.7-3.36a2 2 0 00-.78-1.92l-.13-.09A3 3 0 0123 26zM12 12.44V18H9a3 3 0 00-3 3v21a3 3 0 003 3h28a3 3 0 003-3V21a3 3 0 00-3-3h-3v-5.56C34 6.2 29.36 1 23 1S12 6.19 12 12.44zM23 3c5.14 0 9 4.18 9 9.44V18H14v-5.56C14 7.18 17.86 3 23 3zM9 20h28a1 1 0 011 1v21a1 1 0 01-1 1H9a1 1 0 01-1-1V21a1 1 0 011-1z" />
        </svg>
        <p className="grid--cell mb0 mx24 my16">
          Build a <strong className="p-ff-source-bold">team community</strong>{' '}
          to share coding knowledge.
        </p>
        <a
          href="https://stackoverflow.com/teams/create/free"
          data-ga='["home page","footer callout cta","create a team",null,null]'
        ></a>
        <Link
          to={'/teams'}
          className="grid--cell s-btn fs-body2 px32 bar-md s-btn__outlined p-ff-source-bold"
        >
          Create a free Team
        </Link>
      </section>
      <svg width={0} height={0} className="ps-absolute">
        <defs>
          <clipPath id="curve" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.988 a0.007,0.012,0,0,1,-0.009,0.011 C0.955,0.983,0.802,0.925,0.501,0.925 C0.2,0.925,0.045,0.984,0.009,1 A0.007,0.012,0,0,1,0,0.988" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
