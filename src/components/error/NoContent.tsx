import React from 'react'
import NoContentSvg from '../svg/NoContent'

type PropsType = {
  info?: string,
  fallbackTitle?: string,
  fallbackPath?: string,
}

export default function NoContent({
  info = "I can't find any data!",
  fallbackTitle = 'back',
  fallbackPath = '/',
}: PropsType): JSX.Element {
  return (
    <>
      <div className="grid ai-center jc-center gs32 md:fd-column">
        <div className="grid--cell sm:d-none">
          <NoContentSvg />
        </div>
        <div className="grid--cell wmx5">
          <h1 className="fs-headline1 mb4">Ops</h1>
          <p>{info}</p>
          <a href={fallbackPath} className="s-btn s-btn__filled">
            {fallbackTitle}
          </a>
        </div>
      </div>
    </>
  )
}
