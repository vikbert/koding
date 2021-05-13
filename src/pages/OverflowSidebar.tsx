import React from 'react';

type PropsT = {
  name?: string;
};

export default function OverflowSidebar(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <div
        className="left-sidebar js-pinned-left-sidebar ps-relative"
        id="left-sidebar"
      >
        <div className="left-sidebar--sticky-container js-sticky-leftnav">
          <nav role="navigation">
            <ol className="nav-links">
              <li className=" youarehere">
                <a
                  href="/"
                  className="pl8 js-gps-track nav-links--link"
                  data-gps-track="top_nav.click({is_current:true, location:1, destination:8})"
                  data-s-popover-placement="right"
                >
                  <div className="grid ai-center">
                    <div className="grid--cell truncate">Home</div>
                  </div>
                </a>
              </li>
              <li>
                <ol className="nav-links">
                  <li className="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">
                    Public
                  </li>
                  <li>
                    <a
                      id="nav-questions"
                      href="/questions"
                      className="pl8 js-gps-track nav-links--link -link__with-icon"
                      data-gps-track="top_nav.click({is_current:false, location:1, destination:1})"
                      data-s-popover-placement="right"
                    >
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconGlobe"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                      >
                        <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8zM8 15.32a6.46 6.46 0 01-4.3-2.74 6.46 6.46 0 01-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 013.83 4.51 6.45 6.45 0 01-1.51 5.73v.01z" />
                      </svg>{' '}
                      <span className="-link--channel-name">Questions</span>
                    </a>
                  </li>
                  <li>
                    <a
                      id="nav-tags"
                      href="/tags"
                      className=" js-gps-track nav-links--link"
                      data-gps-track="top_nav.click({is_current:false, location:1, destination:2})"
                      data-s-popover-placement="right"
                    >
                      <div className="grid ai-center">
                        <div className="grid--cell truncate">Tags</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      id="nav-users"
                      href="/users"
                      className=" js-gps-track nav-links--link"
                      data-gps-track="top_nav.click({is_current:false, location:1, destination:3})"
                      data-s-popover-placement="right"
                    >
                      <div className="grid ai-center">
                        <div className="grid--cell truncate">Users</div>
                      </div>
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </nav>
        </div>
        <div
          className="s-popover"
          id="popover-teams-create-cta"
          role="menu"
          aria-hidden="true"
        >
          <div className="s-popover--arrow" />
          <div className="ps-relative overflow-hidden">
            <p className="mb2">
              <strong>Teams</strong>
            </p>
            <p className="mb12 fs-caption fc-black-400">Q&amp;A for work</p>
            <p className="mb12 fs-caption fc-medium">
              Connect and share knowledge within a single location that is
              structured and easy to search.
            </p>
            <a
              href="https://stackoverflow.com/teams"
              className="js-gps-track s-btn s-btn__primary s-btn__xs"
              data-gps-track="teams.create.left-sidenav.click({ Action: CtaClick })"
              data-ga='["teams left navigation","left nav cta","stackoverflow.com/teams",null,null]'
            >
              Learn more
            </a>
          </div>
          <div className="ps-absolute t8 r8">
            <svg
              aria-hidden="true"
              className="fc-orange-500 svg-spot spotPeople"
              width={48}
              height={48}
              viewBox="0 0 48 48"
            >
              <path
                d="M13.5 28a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM7 30a1 1 0 011-1h11a1 1 0 011 1v5h11v-5a1 1 0 011-1h12a1 1 0 011 1v10a2 2 0 01-2 2H33v5a1 1 0 01-1 1H20a1 1 0 01-1-1v-5H8a1 1 0 01-1-1V30zm25-6.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zM24.5 34a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                opacity=".2"
              />
              <path d="M16.4 26.08A6 6 0 107.53 26C5.64 26.06 4 27.52 4 29.45V40a1 1 0 001 1h9a1 1 0 100-2h-4v-7a1 1 0 10-2 0v7H6v-9.55c0-.73.67-1.45 1.64-1.45H16a1 1 0 00.4-1.92zM12 18a4 4 0 110 8 4 4 0 010-8zm16.47 14a6 6 0 10-8.94 0A3.6 3.6 0 0016 35.5V46a1 1 0 001 1h14a1 1 0 001-1V35.5c0-1.94-1.64-3.42-3.53-3.5zM20 28a4 4 0 118 0 4 4 0 01-8 0zm-.3 6h8.6c1 0 1.7.75 1.7 1.5V45h-2v-7a1 1 0 10-2 0v7h-4v-7a1 1 0 10-2 0v7h-2v-9.5c0-.75.7-1.5 1.7-1.5zM42 22c0 1.54-.58 2.94-1.53 4A3.5 3.5 0 0144 29.45V40a1 1 0 01-1 1h-9a1 1 0 110-2h4v-7a1 1 0 112 0v7h2v-9.55A1.5 1.5 0 0040.48 28H32a1 1 0 01-.4-1.92A6 6 0 1142 22zm-2 0a4 4 0 10-8 0 4 4 0 008 0z" />
              <path
                d="M17 10a1 1 0 011-1h12a1 1 0 110 2H18a1 1 0 01-1-1zm1-5a1 1 0 100 2h12a1 1 0 100-2H18zm-4-4a1 1 0 00-1 1v12a1 1 0 001 1h5.09l4.2 4.2a1 1 0 001.46-.04l3.7-4.16H34a1 1 0 001-1V2a1 1 0 00-1-1H14zm1 12V3h18v10h-5a1 1 0 00-.75.34l-3.3 3.7-3.74-3.75a1 1 0 00-.71-.29H15z"
                opacity=".35"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
