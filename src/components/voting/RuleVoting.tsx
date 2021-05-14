import React from 'react';

type PropsT = {
  name?: string;
};

export default function RuleVoting(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <div className="js-voting-container grid jc-center fd-column ai-stretch gs4 fc-black-200">
        <button
          className="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer"
          aria-pressed="false"
          aria-label="Up vote"
          data-selected-classes="fc-theme-primary"
          aria-describedby="--stacks-s-tooltip-6pb3mn1h"
        >
          <svg
            aria-hidden="true"
            className="m0 svg-icon iconArrowUpLg"
            width={36}
            height={36}
            viewBox="0 0 36 36"
          >
            <path d="M2 26h32L18 10 2 26z" />
          </svg>
        </button>
        <div
          className="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center"
          itemProp="upvoteCount"
          data-value={0}
        >
          0
        </div>
        <button
          className="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer"
          aria-pressed="false"
          aria-label="Down vote"
          data-selected-classes="fc-theme-primary"
          aria-describedby="--stacks-s-tooltip-14gmr2h5"
        >
          <svg
            aria-hidden="true"
            className="m0 svg-icon iconArrowDownLg"
            width={36}
            height={36}
            viewBox="0 0 36 36"
          >
            <path d="M2 10h32L18 26 2 10z" />
          </svg>
        </button>
        <div
          id="--stacks-s-tooltip-14gmr2h5"
          className="s-popover s-popover__tooltip pe-none"
          aria-hidden="true"
          role="tooltip"
        >
          This question does not show any research effort; it is unclear or not
          useful
          <div className="s-popover--arrow" />
        </div>
        <button className="js-bookmark-btn s-btn s-btn__unset c-pointer py4 js-gps-track">
          <svg
            aria-hidden="true"
            className="svg-icon iconBookmark"
            width={18}
            height={18}
            viewBox="0 0 18 18"
          >
            <path d="M6 1a2 2 0 00-2 2v14l5-4 5 4V3a2 2 0 00-2-2H6zm3.9 3.83h2.9l-2.35 1.7.9 2.77L9 7.59l-2.35 1.7.9-2.76-2.35-1.7h2.9L9 2.06l.9 2.77z" />
          </svg>
          <div className="js-bookmark-count mt4 d-none" />
        </button>
        <div
          id="--stacks-s-tooltip-3dx4g9hy"
          className="s-popover s-popover__tooltip pe-none"
          aria-hidden="true"
          role="tooltip"
        >
          Bookmark this question.
          <div className="s-popover--arrow" />
        </div>
        <a
          className="js-post-issue grid--cell s-btn s-btn__unset c-pointer py6 mx-auto"
          href="/posts/59026114/timeline"
          aria-label="Timeline"
          aria-describedby="--stacks-s-tooltip-j8iu75yh"
        >
          <svg
            aria-hidden="true"
            className="mln2 mr0 svg-icon iconHistory"
            width={19}
            height={18}
            viewBox="0 0 19 18"
          >
            <path d="M3 9a8 8 0 113.73 6.77L8.2 14.3A6 6 0 105 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z" />
          </svg>
        </a>
        <div
          id="--stacks-s-tooltip-j8iu75yh"
          className="s-popover s-popover__tooltip pe-none"
          aria-hidden="true"
          role="tooltip"
        >
          Show activity on this post.
          <div className="s-popover--arrow" />
        </div>
      </div>
    </>
  );
}
