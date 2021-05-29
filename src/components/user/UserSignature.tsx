import React from 'react'
import classNames from 'classnames'

type PropsT = {
  isOwner?: boolean,
}

export default function UserSignature(props: PropsT): JSX.Element {
  const {isOwner = true} = props

  return (
    <>
      <div
        className={classNames('post-signature grid--cell', {owner: isOwner})}
      >
        <div className="user-info">
          <div className="user-action-time">
            <a
              href="/posts/59026114/revisions"
              title="show all edits to this post"
              className="js-gps-track"
              data-gps-track="post.click({ item: 4, priv: 27, post_type: 1 })"
            >
              edited{' '}
              <span title="2021-05-13 20:26:47Z" className="relativetime">
                1 min ago
              </span>
            </a>
          </div>
          <div className="user-gravatar32">
            <a href="/users/2636541/vikbert">
              <div className="gravatar-wrapper-32">
                <img
                  src="https://i.stack.imgur.com/rSdt7.jpg?s=32&amp;g=1"
                  alt=""
                  width="32"
                  height="32"
                  className="bar-sm"
                />
              </div>
            </a>
          </div>
          <div className="user-details">
            <a href="/users/2318649/barny">barny</a>
            <div className="-flair">
              <span
                className="reputation-score"
                title="reputation score "
                dir="ltr"
              >
                5,215
              </span>
              <span title="4 gold badges" aria-hidden="true">
                <span className="badge1" />
                <span className="badgecount">4</span>
              </span>
              <span className="v-visible-sr">4 gold badges</span>
              <span title="16 silver badges" aria-hidden="true">
                <span className="badge2" />
                <span className="badgecount">16</span>
              </span>
              <span className="v-visible-sr">16 silver badges</span>
              <span title="21 bronze badges" aria-hidden="true">
                <span className="badge3" />
                <span className="badgecount">21</span>
              </span>
              <span className="v-visible-sr">21 bronze badges</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
