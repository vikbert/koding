import React from 'react';
import {Rule} from '../../types/Rule';
import {useDispatch} from 'react-redux';
import {updateRule} from '../Rule/ruleWidget';
import IconBookmark from '../icons/IconBookmark';
import classNames from 'classnames';

type PropsT = {
  rule: Rule;
};

export default function RuleVoting({rule}: PropsT): JSX.Element {
  const [target, setTarget] = React.useState(rule);
  const [bookmarked, setBookmarked] = React.useState(true);
  const dispatch = useDispatch();

  function handleVoteUp() {
    setTarget({...target, votes: ++target.votes});

    dispatch(updateRule(target));
  }

  function handleVoteDown() {
    setTarget({...target, votes: --target.votes});

    dispatch(updateRule(target));
  }

  function handleBookmark() {
    setBookmarked(!bookmarked);
  }

  return (
    <>
      <div className="js-voting-container grid jc-center fd-column ai-stretch gs4 fc-black-200">
        <button
          className={classNames(
            'js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer',
            {'fc-theme-primary': target.votes > 0},
          )}
          aria-pressed="false"
          aria-label="Up vote"
          onClick={handleVoteUp}
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
          {target.votes}
        </div>
        <button
          className={classNames(
            'js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer',
            {'fc-theme-primary': target.votes < 0},
          )}
          aria-pressed="false"
          aria-label="Down vote"
          onClick={handleVoteDown}
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
        <button
          onClick={handleBookmark}
          className={classNames(
            'js-bookmark-btn s-btn s-btn__unset c-pointer py4 js-gps-track',
            {'fc-yellow-600': bookmarked},
          )}
        >
          <IconBookmark />
        </button>
      </div>
    </>
  );
}
