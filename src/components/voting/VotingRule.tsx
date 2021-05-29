import React from 'react'
import {Rule} from '../../types/Rule'
import {useDispatch, useSelector} from 'react-redux'
import {updateRule} from '../Rule/ruleWidget'
import classNames from 'classnames'

export default function VotingRule(): JSX.Element {
  const reduxRule = useSelector((state: any) => state.reduxRule)
  const target: Rule = reduxRule.targetRule
  const dispatch = useDispatch()
  const [isDisabled, setIsDisabled] = React.useState(false)

  function setVotingTemporaryDisabled() {
    setIsDisabled(true)
    setTimeout(() => {
      setIsDisabled(false)
    }, 5000)
  }

  function handleVoteUp() {
    setVotingTemporaryDisabled()
    dispatch(updateRule({...target, votes: target.votes + 1}))
  }

  function handleVoteDown() {
    setVotingTemporaryDisabled()
    dispatch(updateRule({...target, votes: target.votes - 1}))
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
          disabled={isDisabled}
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
          disabled={isDisabled}
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
      </div>
    </>
  )
}
