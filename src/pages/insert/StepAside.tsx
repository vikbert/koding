import React from 'react';
import StepDoneMessage from './StepDoneMessage';

export default function StepAside(): JSX.Element {
  return (
    <aside className="fl-shrink0">
      <div
        className="ws3 ml24 md:d-none"
        data-controller="right-rail"
        data-action="s-expandable-control:show->right-rail#onShow s-expandable-control:hide->right-rail#onHide"
      >
        <div className="s-sidebarwidget s-anchors mb24 js-visible-before-review">
          <div className="s-sidebarwidget--header">
            Step 1: Define a new coding convention
          </div>
          <div
            className="s-sidebarwidget--content d-block bg-white pb0 bbr-sm"
            id="how-to-ask"
            data-is-here-when="lg"
          >
            <p>
              The community is here to help you with specific coding, algorithm,
              or language problems.
            </p>

            <StepDoneMessage title={'Your coding convention is great!'} />

            <ol className="list-reset mxn16">
              <li className="bb bc-black-075">
                <button
                  className="s-btn s-btn__unset grid px16 py12 js-gps-track w100 c-pointer"
                  type="button"
                  data-controller="s-expandable-control"
                  data-target="right-rail.step"
                  aria-expanded="true"
                  aria-controls="ask-guidance-expandable-0"
                  data-gps-track="askpage.open_how_to_ask_step({ number: 1 })"
                ></button>
              </li>
              <li className="bb bc-black-075">
                <button
                  className="s-btn s-btn__unset grid px16 py12 js-gps-track w100 c-pointer"
                  type="button"
                  data-controller="s-expandable-control"
                  data-target="right-rail.step"
                  aria-expanded="false"
                  aria-controls="ask-guidance-expandable-1"
                  data-gps-track="askpage.open_how_to_ask_step({ number: 2 })"
                >
                  <div className="grid--cell fl1 grid ai-center">
                    <div className="grid--cell">
                      <img
                        src="https://cdn.sstatic.net/Img/list-2.svg?v=9382fc2c3631"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="grid--cell ml12 fw-bold">
                      Add the bad code snippet
                    </span>
                  </div>
                  <div>
                    <div className=" js-arrow-down">
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconArrowDownAlt"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                      >
                        <path d="M16.01 6.43l-1.4-1.41L9 10.6 3.42 5l-1.4 1.42 7 7 7-7z" />
                      </svg>
                    </div>
                    <div className="d-none js-arrow-up ">
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconArrowUpAlt"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                      >
                        <path d="M16.01 11.62l-1.4 1.4L9 7.45l-5.59 5.59-1.4-1.41 7-7 7 7z" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div
                  className="s-expandable mx16"
                  id="ask-guidance-expandable-1"
                >
                  <div className="s-expandable--content pb12 ml16 pl12">
                    Show what you’ve tried and tell us what you found (on this
                    site or elsewhere) and why it didn’t meet your needs. You
                    can get better answers when you provide research.
                  </div>
                </div>
              </li>
              <li>
                <button
                  className="s-btn s-btn__unset grid px16 py12 js-gps-track w100 c-pointer"
                  type="button"
                  data-controller="s-expandable-control"
                  data-target="right-rail.step"
                  aria-expanded="false"
                  aria-controls="ask-guidance-expandable-2"
                  data-gps-track="askpage.open_how_to_ask_step({ number: 3 })"
                >
                  <div className="grid--cell fl1 grid ai-center">
                    <div className="grid--cell">
                      <img
                        src="https://cdn.sstatic.net/Img/list-3.svg?v=323a95564232"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="grid--cell ml12 fw-bold">
                      Add the good code snippet
                    </span>
                  </div>
                  <div>
                    <div className=" js-arrow-down">
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconArrowDownAlt"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                      >
                        <path d="M16.01 6.43l-1.4-1.41L9 10.6 3.42 5l-1.4 1.42 7 7 7-7z" />
                      </svg>
                    </div>
                    <div className="d-none js-arrow-up ">
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconArrowUpAlt"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                      >
                        <path d="M16.01 11.62l-1.4 1.4L9 7.45l-5.59 5.59-1.4-1.41 7-7 7 7z" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div
                  className="s-expandable mx16"
                  id="ask-guidance-expandable-2"
                >
                  <p>
                    The community is here to help you with specific coding,
                    algorithm, or language problems.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </aside>
  );
}
