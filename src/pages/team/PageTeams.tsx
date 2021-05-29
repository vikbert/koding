import React from 'react'
import AsideReadingTips from '../../components/aside/AsideReadingTips'
import NoContent from '../../components/error/NoContent'
import Headline from '../../components/headline/Headline'

export default function PageTeams(): JSX.Element {
  return (
    <>
      <div id="mainbar">
        <Headline headline={'Teams'} />
        <div className="grid page__tag-list">
          <div className="grid--cell12">
            <NoContent
              info="I can not find any team. Do you wanna create a new one?"
              fallbackTitle="✚ Create a new team"
            />
          </div>
        </div>
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  )
}
