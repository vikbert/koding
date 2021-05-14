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
        </button>
      </div>
    </>
  );
}
