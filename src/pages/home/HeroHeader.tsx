import React from 'react';
import HeroShowcases from './HeroShowcases';
import BackgroundSquare from './BackgroundSquare';
import HeroHeadline from './HeroHeadline';
import Divider from '../../components/elements/Divider';

export default function HeroHeader(): JSX.Element {
  return (
    <>
      <header className="p-wrapper-home btr-lg p48 md:p32 sm:p12 ta-center ps-relative">
        <div
          style={{clipPath: 'url(#curve)'}}
          className="p32 sm:p12 bar-lg p-bg-dark-gradient d:fc-black-750 ps-relative z-selected fc-black-025 p-font-smooth mbn128 pb128"
        >
          <HeroHeadline />
          <Divider color={'black'} />
          <HeroShowcases />
        </div>
        <BackgroundSquare />
      </header>
    </>
  );
}
