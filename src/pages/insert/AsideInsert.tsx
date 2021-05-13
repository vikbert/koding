import React from 'react';

export default function AsideInsert(): JSX.Element {
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
            <div className="mb16">
              <p>
                The community is here to help you with specific coding,
                algorithm, or language problems.
              </p>
              <p>Avoid asking opinion-based questions.</p>
            </div>
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
                >
                  <div className="grid--cell fl1 grid ai-center">
                    <div className="grid--cell">
                      <img
                        src="https://cdn.sstatic.net/Img/list-1.svg?v=e8dd475ba207"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="grid--cell ml12 fw-bold">
                      Summarize the problem
                    </span>
                  </div>
                  <div>
                    <div className="d-none js-arrow-down">
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
                    <div className=" js-arrow-up ">
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
                  className="s-expandable is-expanded mx16"
                  id="ask-guidance-expandable-0"
                >
                  <div className="s-expandable--content pb12 ml16 pl4">
                    <ul className="ml24 mb0">
                      <li>
                        <p>Include details about your goal</p>
                      </li>
                      <li>
                        <p>Describe expected and actual results</p>
                      </li>
                      <li>
                        <p className="mb0">Include any error messages</p>
                      </li>
                    </ul>
                  </div>
                </div>
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
                      Describe what you’ve tried
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
                      Add the suggested code snippet
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
                  <div className="s-expandable--content pb12 ml16 pl12">
                    When appropriate, share the minimum amount of code others
                    need to reproduce your problem (also called a{' '}
                    <a
                      href="/help/minimal-reproducible-example"
                      target="_blank"
                    >
                      minimum, reproducible example
                    </a>
                    )
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="s-sidebarwidget s-anchors mb24 js-visible-before-review">
          <div className="s-sidebarwidget--header bbr-sm js-widget-header">
            <button
              className="s-btn s-btn__unset grid js-gps-track w100 c-pointer"
              type="button"
              data-controller="s-expandable-control"
              aria-expanded="false"
              aria-controls="other-site-links"
              data-gps-track="askpage.open_guidance_section({number: 2})"
            >
              <div className="grid--cell fl1 ta-left">
                Have a non-programming question?
              </div>
              <div className="grid--cell">
                <div className="js-arrow-down s-link s-link__inherit">
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
                <div className="d-none js-arrow-up s-link s-link__inherit">
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
          </div>
          <div className="s-expandable" id="other-site-links">
            <div className="s-expandable--content">
              <div className="s-sidebarwidget--content d-block bg-white bbr-sm">
                <p>
                  <a
                    className="js-gps-track"
                    data-gps-track="askpage.click_guidance_link({target: 'superuser'})"
                    href="https://superuser.com/help/on-topic"
                    target="_blank"
                  >
                    Super user
                  </a>
                  <br />
                  Troubleshooting hardware and software issues
                </p>
                <p>
                  <a
                    className="js-gps-track"
                    data-gps-track="askpage.click_guidance_link({target: 'softwareengineering'})"
                    href="https://softwareengineering.stackexchange.com"
                    target="_blank"
                  >
                    Software engineering
                  </a>
                  <br />
                  For software development methods and process questions
                </p>
                <p>
                  <a
                    className="js-gps-track"
                    data-gps-track="askpage.click_guidance_link({target: 'hardwarerecs'})"
                    href="https://hardwarerecs.stackexchange.com/help/on-topic"
                    target="_blank"
                  >
                    Hardware recommendations
                  </a>
                </p>
                <p>
                  <a
                    className="js-gps-track"
                    data-gps-track="askpage.click_guidance_link({target: 'softwarerecs'})"
                    href="https://softwarerecs.stackexchange.com/help/on-topic"
                    target="_blank"
                  >
                    Software recommendations
                  </a>
                </p>
                <p className="mb0">
                  Ask questions about the site on{' '}
                  <a
                    className="js-gps-track"
                    data-gps-track="askpage.click_guidance_link({target: 'meta'})"
                    href="https://meta.stackoverflow.com"
                    target="_blank"
                  >
                    meta
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="s-sidebarwidget s-anchors js-visible-before-review">
          <div className="s-sidebarwidget--header bbr-sm js-widget-header">
            <button
              className="s-btn s-btn__unset grid js-gps-track w100 c-pointer"
              type="button"
              data-controller="s-expandable-control"
              aria-expanded="false"
              aria-controls="more-helpful-links"
              data-gps-track="askpage.open_guidance_section({number: 3})"
            >
              <div className="grid--cell fl1 ta-left">More helpful links</div>
              <div className="grid--cell">
                <div className="js-arrow-down s-link s-link__inherit">
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
                <div className="js-arrow-up d-none s-link s-link__inherit">
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
          </div>
          <div className="s-expandable" id="more-helpful-links">
            <div className="s-expandable--content">
              <div className="s-sidebarwidget--content d-block bg-white bbr-sm">
                <p>
                  Find more information about{' '}
                  <a
                    className="js-gps-track"
                    data-gps-track="askpage.click_guidance_link({target: 'how-to-ask'})"
                    href="/help/how-to-ask"
                    target="_blank"
                  >
                    how to ask a good question here
                  </a>
                </p>
                <p className="mb0">
                  Visit the{' '}
                  <a
                    className="js-gps-track"
                    data-gps-track="askpage.click_guidance_link({target: 'help'})"
                    href="/help"
                    target="_blank"
                  >
                    help center
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="js-post-review-summary-container s-sidebarwidget s-anchors js-visible-during-review d-none">
          <div className="s-sidebarwidget--header">
            Step 2: Review your question
          </div>
          <div
            className="s-sidebarwidget--content d-block bg-white bbr-sm"
            id="review-your-question"
            data-is-here-when="lg"
          >
            <div className="js-post-review-summary">
              <div className="js-loading-message">
                <p className="mb0">Loading…</p>
              </div>
              <div className="js-success-no-warnings grid d-none">
                <div className="grid--cell mr16">
                  <img
                    width={20}
                    height={20}
                    src="https://cdn.sstatic.net/Img/ask/success.svg?v=b9c8125e2f1c"
                    alt="Success"
                  />
                </div>
                <div className="grid--cell mr4">
                  <div
                    className="d-flex ai-center fw-bold"
                    style={{minHeight: '20px'}}
                  >
                    <div>Your question is ready to publish!</div>
                  </div>
                  <p className="mt6 mb0">
                    Our automated system checked for ways to improve your
                    question and found none.
                  </p>
                </div>
              </div>
              <div className="js-error-container grid d-none">
                <div className="grid--cell mr16">
                  <img
                    width={20}
                    height={20}
                    src="https://cdn.sstatic.net/Img/ask/error.svg?v=b373711635d0"
                    alt="Error"
                  />
                </div>
                <div className="grid--cell mr4">
                  <div
                    className="d-flex ai-center fw-bold"
                    style={{minHeight: '20px'}}
                  >
                    <div>Your question couldn’t be submitted</div>
                  </div>
                  <p className="js-error-message mt6 mb0" />
                </div>
              </div>
              <div className="js-warning-and-error-separator mxn16 my16 bb bc-black-075 d-none" />
              <div className="js-warning-container d-none">
                <p className="js-unresolved-warnings-message">
                  Tips to fix your question and improve your chances of getting
                  answers:
                </p>
                <p className="js-resolved-warnings-message">
                  Looks like you’re ready to publish!
                </p>
                <div className="js-warning-list" />
              </div>
            </div>
          </div>
        </div>
        <div className="s-expandable">
          <div className="s-expandable--content" />
        </div>
      </div>
    </aside>
  );
}
