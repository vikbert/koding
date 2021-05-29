import React from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import '../../components/header/header.css'
import RuleInsertForm from '../../components/Rule/form/RuleInsertForm'
import AsideInformation from '../../components/aside/AsideInformation'
import HeadlineWithBg from '../../components/headline/HeadlineWithBg'

const PageInsert = () => {
  useDocumentTitle('Insert new coding convention')

  return (
    <>
      <HeadlineWithBg
        headline="Add a new coding convention"
        imagePath="/img/chat.svg"
      />
      <div id="mainbar">
        <div className="grid">
          <RuleInsertForm />
        </div>
      </div>
      <div id="sidebar">
        <AsideInformation title={'Clean up the code'}>
          <p>
            Be sure you have removed all unnecessary spaces and tabs, try to
            clean up the code snippet at first. <br />
            Try
            <a
              href="https://webformatter.com/html"
              className="s-btn s-btn__sm"
              target="_blank"
            >
              https://webformatter.com/
            </a>
          </p>
        </AsideInformation>
      </div>
    </>
  )
}

export default PageInsert
