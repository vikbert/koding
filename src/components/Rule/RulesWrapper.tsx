import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Rule} from '../../types/Rule'
import './rulesWrapper.css';
import RuleBubble from "./RuleBubble";
import ExtendedInput from "../base/ExtendedInput";
import {showPopup} from "./ruleAction";

const RulesWrapper = () => {
  const [filter, setFilter] = React.useState('');
  const ruleState = useSelector((state: any) => state.reduxRule)
  const dispatch = useDispatch();

  const handleOnChange = (userInput: string) => {
    setFilter(userInput);
  }

  const filterRules = () => {
    if (filter.length === 0) {
      return ruleState.rules;
    }

    return ruleState.rules.filter((rule: Rule) => rule.body.toLowerCase().includes(filter.toLowerCase()))
  }

  const handleOpenRulePopup = (rule: Rule) => {
    dispatch(showPopup(rule));
  }

  return (
      <div className={'rules_wrapper slide-left'}>
        <ExtendedInput
            type={'search'}
            placeHolderText={'Type to filter the conventions'}
            handleOnChange={handleOnChange}/>

        {filterRules().map((rule: Rule, index: number) => (
            <div key={index} onClick={() => handleOpenRulePopup(rule)}>
              <RuleBubble ruleText={rule.body}/>
            </div>
        ))}

        {filterRules().length === 0 && (
            <div className="container my-2">
              <h4>no convention matched</h4>
            </div>
        )}
      </div>
  );
};

export default RulesWrapper;
