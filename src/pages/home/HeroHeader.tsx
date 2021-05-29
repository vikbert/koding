import React from 'react'
import HeroBubble from './HeroBubble'
import HeroShowcases from './HeroShowcases'
import BackgroundSquare from './BackgroundSquare'
import HeroHeadline from './HeroHeadline'

export default function HeroHeader(): JSX.Element {
  return (
    <>
      <header className="p-wrapper-home btr-lg p48 md:p32 sm:p12 ta-center ps-relative">
        <div
          style={{clipPath: 'url(#curve)'}}
          className="p32 sm:p12 bar-lg p-bg-dark-gradient d:fc-black-750 ps-relative z-selected fc-black-025 p-font-smooth mbn128 pb128"
        >
          <HeroHeadline />
          <span className="w64 h8 bar-pill d-block bg-black-500 mx-auto" />
          <HeroShowcases />
        </div>
        <BackgroundSquare />
      </header>
    </>
  )
}
