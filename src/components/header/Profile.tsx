import React from 'react'

type PropsT = {
  name?: string
}

export default function Profile(props: PropsT): JSX.Element {
  const {name} = props

  return (
    <>
      <a
        href="https://vikbert.github.io/"
        target="_blank"
        className="my-profile js-gps-track"
        data-gps-track="profile_summary.click()"
      >
        <div className="gravatar-wrapper-24" title="vikbert">
          <img
            src="https://i.stack.imgur.com/rSdt7.jpg?s=48&g=1"
            alt=""
            width={24}
            height={24}
            className="bar-sm -avatar js-avatar-me"
          />
        </div>{' '}
        <span className="v-visible-sr">vikbert</span>
        <div
          className="-rep js-header-rep"
          title="your reputation: 710"
          aria-hidden="true"
        >
          710
        </div>
        <span className="v-visible-sr">, 710 reputation</span>
        <div className="-badges">
          <span title="7 silver badges" aria-hidden="true">
            <span className="badge2">●</span>
            <span className="badgecount">7</span>
          </span>
          <span className="v-visible-sr">7 silver badges</span>
          <span title="8 bronze badges" aria-hidden="true">
            <span className="badge3">●</span>
            <span className="badgecount">8</span>
          </span>
          <span className="v-visible-sr">8 bronze badges</span>{' '}
        </div>
      </a>
    </>
  )
}
