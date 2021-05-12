import React from 'react';
import {Rule} from "../../types/Rule";

type PropsT = {
  rule: Rule
};

export default function RulePreview(props: PropsT): JSX.Element {
  return (
      <>
        <div className="rule_bubble rule_preview space-between">
          <p>{props.rule.body}</p>
        </div>
      </>
  );
};

