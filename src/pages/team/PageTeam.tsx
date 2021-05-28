import React from 'react';
import OverflowHeader from '../../components/header/OverflowHeader';

type PropsT = {
  name?: string;
};

export default function PageTeam(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <OverflowHeader />
      <div className="container wmx100 w100 p-ff-source">
        <div
          data-is-here-when
          className="left-sidebar js-pinned-left-sidebar ps-relative"
          data-can-be="left-sidebar"
        />
        <div
          id="content"
          className="w100 wmx100 p0 snippet-hidden bg-black-025 snippet-hidden"
        >
          <header className="p-wrapper-home btr-lg p48 md:p32 sm:p12 ta-center ps-relative">
            <div
              style={{clipPath: 'url(#curve)'}}
              className="p32 sm:p12 bar-lg p-bg-dark-gradient d:fc-black-750 ps-relative z-selected fc-black-025 p-font-smooth mbn128 pb128"
            >
              <div className="wmx9 mx-auto grid grid__allcells6 sm:fd-column">
                <img
                  src="https://cdn.sstatic.net/Img/home/illo-code.svg?v=b7ee00fff9d8"
                  className="uc-none ps-absolute t128 mt128"
                  style={{left: '8%'}}
                  alt=""
                />
                <img
                  src="https://cdn.sstatic.net/Img/home/illo-code.svg?v=b7ee00fff9d8"
                  className="uc-none ps-absolute tn128 mt128"
                  style={{right: '8%'}}
                  alt=""
                />
                <div className="grid--cell p16 sm:p12">
                  <div className="ps-relative p-speech-bubble--right h100 p24 bblr-lg btlr-lg btrr-lg bg-orange-100 fc-black-800">
                    <svg
                      aria-hidden="true"
                      className="fc-orange-500 mb16 svg-spot spotSearch"
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                    >
                      <path
                        opacity=".2"
                        d="M29.22 38.1a3.4 3.4 0 014.81-4.82l8.81 8.81a3.4 3.4 0 01-4.81 4.81l-8.81-8.8z"
                      />
                      <path d="M18.5 5a1 1 0 100 2c.63 0 1.24.05 1.84.15a1 1 0 00.32-1.98A13.6 13.6 0 0018.5 5zm7.02 1.97a1 1 0 10-1.04 1.7 11.5 11.5 0 015.44 8.45 1 1 0 001.98-.24 13.5 13.5 0 00-6.38-9.91zM18.5 0a18.5 18.5 0 1010.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1044.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0018.5 0zM2 18.5a16.5 16.5 0 1133 0 16.5 16.5 0 01-33 0zm29.58 15.2a1.5 1.5 0 112.12-2.12l9.83 9.83a1.5 1.5 0 11-2.12 2.12l-9.83-9.83z" />
                    </svg>
                    <h2 className="fs-subheading wmx3 mx-auto">
                      Find the best coding convention for your team, share
                      others your best
                    </h2>
                    <a
                      href="/users/signup"
                      className="s-btn w100 wmx2 fs-body2 px32 bar-md bg-orange-500 h:bg-orange-600 fc-white d:fc-black-900 p-ff-source-bold mt-auto"
                      data-ga='["home page","header cta","join community",null,null]'
                    >
                      Join the community
                    </a>
                    <p className="mb0 mt12 fc-black-600">
                      or{' '}
                      <a
                        className="s-link s-link__underlined fc-black-700 h:fc-orange-600"
                        href="/questions"
                      >
                        search content
                      </a>
                    </p>
                  </div>
                </div>
                <div className="grid--cell p16 sm:p12">
                  <div className="ps-relative p-speech-bubble--left h100 p24 bbrr-lg btlr-lg btrr-lg bg-blue-100 fc-black-800">
                    <svg
                      aria-hidden="true"
                      className="fc-blue-500 mb16 svg-spot spotLock"
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
                    <h2 className="fs-subheading wmx3 mx-auto">
                      Want a team space for your technical knowledge?
                    </h2>
                    <a
                      href="https://stackoverflow.com/teams/create/free"
                      className="s-btn w100 wmx2 fs-body2 px32 bar-md bg-blue-500 h:bg-blue-600 fc-white d:fc-black-900 p-ff-source-bold mt-auto"
                      data-ga='["home page","header cta","create a team",null,null]'
                    >
                      Create a free Team
                    </a>
                    <p className="mb0 mt12 fc-black-600">
                      or{' '}
                      <a
                        className="s-link s-link__underlined fc-black-700 h:fc-blue-600"
                        href="https://stackoverflow.com/teams"
                      >
                        discover Teams
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="p-ff-roboto-slab-bold fs-display2 mb0 pt64 pb64 ps-relative z-active">
                <span>We take care of</span>
                <br />
                <strong>Code Quality</strong> & <strong>Coding Standard</strong>
              </h1>
              <span className="w64 h8 bar-pill d-block bg-black-500 mx-auto" />
              <div className="grid grid__allcells3 jc-center px12 md:fd-column pt32 pb64 sm:pb128 wmx9 mx-auto">
                <div className="grid--cell py32 md:pt16 md:pb16">
                  <div className="fs-title p-ff-roboto-slab-bold mb4">
                    100+ million
                  </div>
                  <div className="fc-black-300 fs-body2 px24">
                    monthly visitors to Stack Overflow &amp; Stack Exchange
                  </div>
                </div>
                <div className="grid--cell py32 md:pt16 md:pb16">
                  <div className="fs-title p-ff-roboto-slab-bold mb4">
                    45.1+ billion
                  </div>
                  <div className="fc-black-300 fs-body2 px24">
                    Times a developer got help since 2008
                  </div>
                </div>
                <div className="grid--cell py32 md:pt16 md:pb16">
                  <div className="fs-title p-ff-roboto-slab-bold mb4">
                    179% ROI
                  </div>
                  <div className="fc-black-300 fs-body2 px24">
                    from companies using Stack Overflow for Teams
                  </div>
                </div>
                <div className="grid--cell py32 md:pt16 md:pb16">
                  <div className="fs-title p-ff-roboto-slab-bold mb4">
                    5,000+
                  </div>
                  <div className="fc-black-300 fs-body2 px24">
                    Stack Overflow for Teams instances active every day
                  </div>
                </div>
              </div>
            </div>
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
            <span
              aria-hidden="true"
              className="p-bits fc-blue-200 b0 l128 w24 h24"
            />
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
          </header>
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
              Build a{' '}
              <strong className="p-ff-source-bold">team community</strong> to
              share coding knowledge.
            </p>
            <a
              href="https://stackoverflow.com/teams/create/free"
              className="grid--cell s-btn fs-body2 px32 bar-md s-btn__outlined p-ff-source-bold"
              data-ga='["home page","footer callout cta","create a team",null,null]'
            >
              Create a free Team
            </a>
          </section>
          <svg width={0} height={0} className="ps-absolute">
            <defs>
              <clipPath id="curve" clipPathUnits="objectBoundingBox">
                <path d="M0,0 H1 V0.988 a0.007,0.012,0,0,1,-0.009,0.011 C0.955,0.983,0.802,0.925,0.501,0.925 C0.2,0.925,0.045,0.984,0.009,1 A0.007,0.012,0,0,1,0,0.988" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
