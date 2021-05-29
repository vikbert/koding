import React from 'react'
import Team1 from '../../components/svg/Team1'
import Team2 from '../../components/svg/Team2'
import {Link} from 'react-router-dom'

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
                <Team2 />
              </div>
              <h2 className="mx48 sm:ml32 sm:mr32 mb12 p-ff-roboto-slab-bold fs-headline1">
                A public platform building the definitive collection of coding
                conventions
              </h2>
              <p className="mx48 sm:ml32 sm:mr32 mb32 fc-black-600 fs-subheading">
                A community-based space to find and contribute coding
                conventions, and share other your best.
              </p>
              <Link
                to={'/convention/newest'}
                className="s-btn w100 wmx2 fs-body2 px32 bar-md bg-orange-500 h:bg-orange-600 fc-white d:fc-black-900 p-ff-source-bold mt-auto"
              >
                Let's go
              </Link>
              <p className="mb0 mt12 fc-black-600">
                or{' '}
                <Link
                  to={'/convention/newest'}
                  className="s-link s-link__underlined fc-black-700 h:fc-orange-600"
                >
                  search conventions
                </Link>
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
                <Team1 />
              </div>
              <h2 className="mx48 sm:ml32 sm:mr32 mb12 p-ff-roboto-slab-bold fs-headline1">
                A private team collaboration &amp; coding conventions sharing
                and voting
              </h2>
              <p className="mx48 sm:ml32 sm:mr32 mb32 fc-black-600 fs-subheading">
                A web-based platform to increase the knowledge transparency for
                developers and teams.
              </p>

              <Link
                to={'/teams/insert'}
                className="s-btn w100 wmx2 fs-body2 px32 bar-md bg-blue-500 h:bg-blue-600 fc-white d:fc-black-900 p-ff-source-bold mt-auto"
              >
                Create a free Team
              </Link>
              <p className="mb0 mt12 fc-black-600">
                or{' '}
                <Link
                  to={'/teams'}
                  className="s-link s-link__underlined fc-black-700 h:fc-blue-600"
                >
                  discover Teams
                </Link>
              </p>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="p-bits fc-green-500 sm:d-none t50 r0 w128 h128"
          />
        </div>
      </section>
    </>
  )
}
