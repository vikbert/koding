import React from 'react';
import RuleItem from '../../components/Rule/RuleItem';
import type {Rule} from '../../types/Rule';
import LoadingContent from '../../components/loading/LoadingContent';

type PropsType = {
  rules: Rule[];
};
export default function ListRules({rules}: PropsType): JSX.Element {
  if (rules.length === 0) {
    return <LoadingContent />;
  }

  return (
    <div id="qlist-wrapper" className="flush-left">
      <div id="question-mini-list">
        {rules.map((rule: Rule) => (
          <RuleItem rule={rule} key={rule.id} />
        ))}
      </div>
    </div>
  );
}
