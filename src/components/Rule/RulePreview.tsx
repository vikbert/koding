import React from 'react';
import type {Rule} from '../../types/Rule';
import './rule.css'

type PropsT = {
  rule: Rule;
};

export default function RulePreview(props: PropsT): JSX.Element {
  return (
    <>
      <div className="rule_bubble rule_preview ">
        <div className="rule-meta">
          <div className={'meta-item'}>
            <div>12</div>
            <div>votes</div>
          </div>
          <div className={'meta-item'}>
            <div>12</div>
            <div>Snippets</div>
          </div>
          <div className={'meta-item'}>
            <div>12</div>
            <div>Views</div>
          </div>
        </div>
        <div>{props.rule.body}</div>
      </div>
    </>
  );
}
