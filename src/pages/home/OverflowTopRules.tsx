import React from 'react';
import RuleItem from '../../components/Rule/RuleItem';
import {useSelector, useDispatch} from 'react-redux';
import {loadRules} from '../../components/Rule/ruleAction';
import HeadlineHome from './HeadlineHome';
import type {Rule} from '../../types/Rule';
import NoContent from '../../components/error/NoContent';
import {loadSnippets} from "../../components/code/snippetAction";

export default function OverflowTopRules(): JSX.Element {
  const reduxRule = useSelector((state: any) => state.reduxRule);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadRules());
    dispatch(loadSnippets())
  }, []);

  return (
    <>
      <HeadlineHome />
      {reduxRule.rules.length === 0 ? (
        <NoContent />
      ) : (
        <div id="qlist-wrapper" className="flush-left">
          <div id="question-mini-list">
            {reduxRule.rules.map((rule: Rule) => (
              <RuleItem rule={rule} key={rule.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
