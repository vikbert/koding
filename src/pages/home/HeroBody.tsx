import React from 'react';
import Team1 from '../../components/svg/Team1';
import Team2 from '../../components/svg/Team2';

export default function HeroBody(): JSX.Element {
  return (
    <>
      <section className="wmx12 mx-auto ps-relative z-active mtn128 sm:mt0 p32 sm:pt48">
        <div className="grid grid__allcells6 md:fd-column ta-center mx48 sm:ml0 sm:mr0">
          <div className="grid--cell p16">
            <div
              style={{
                background:
                  'linear-gradient(0deg, var(--orange-100) 30%, var(--white))',
              }}
              className="h100 py48 sm:py32 bg-orange-050 bar-lg p-bs-wrapper"
            >
              <div className="d-block my32 w100 h-auto">
                <Team1 />
              </div>
              <h2 className="mx48 sm:ml32 sm:mr32 mb12 p-ff-roboto-slab-bold fs-headline1">
                A internal platform building the definitive collection of coding
                conventions
              </h2>
              <p className="mx48 sm:ml32 sm:mr32 mb32 fc-black-600 fs-subheading">
                A community-based space to find and contribute coding
                conventions, and share other your best.
              </p>
            </div>
          </div>
          <div className="grid--cell p16">
            <div
              style={{
                background:
                  'linear-gradient(0deg, var(--blue-100) 30%, var(--white))',
              }}
              className="h100 py48 sm:py32 bg-blue-050 bar-lg p-bs-wrapper"
            >
              <div className="d-block my32 w100 h-auto">
                <Team2 />
              </div>
              <h2 className="mx48 sm:ml32 sm:mr32 mb12 p-ff-roboto-slab-bold fs-headline1">
                A private collaboration &amp; coding conventions sharing and
                ranking
              </h2>
              <p className="mx48 sm:ml32 sm:mr32 mb32 fc-black-600 fs-subheading">
                A web-based platform to increase the knowledge transparency for
                developers and teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
