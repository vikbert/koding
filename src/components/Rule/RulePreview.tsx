import React from 'react'
import type {Rule} from '../../types/Rule'
import './rule.css'

type PropsT = {
  rule: Rule,
}

export default function RulePreview(props: PropsT): JSX.Element {
  const {rule} = props

  return (
    <>
      <div className="rule_bubble rule_preview ">
        <div className="rule-meta">
          <div className={'meta-item'}>
            <div>{rule.votes || 0}</div>
            <div>votes</div>
          </div>
          <div className={'meta-item'}>
            <div>{rule.snippets.length}</div>
            <div>Snippets</div>
          </div>
          <div className={'meta-item'}>
            <div>{rule.views || 0}</div>
            <div>Views</div>
          </div>
        </div>
        <div>{rule.title}</div>
      </div>
    </>
  )
}
