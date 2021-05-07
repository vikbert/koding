import React from 'react';

interface IProps {
  ruleText: string
}

const RuleBubble = (props: IProps) => (
        <div className="rule_bubble">
          <p>{props.ruleText}</p>
        </div>
  );

export default RuleBubble;
