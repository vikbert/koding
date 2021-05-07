import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Rule} from '../../types/Rule'
import './rulesWrapper.css';
import RuleBubble from "./RuleBubble";
import ExtendedInput from "../base/ExtendedInput";

const RulesWrapper = () => {
  const [filter, setFilter] = React.useState('');
  const ruleState = useSelector((state: any) => state.reduxRule)

  const handleOnChange = (userInput: string) => {
    setFilter(userInput);
  }

  const filterRules = () => {
    if (filter.length === 0) {
      return ruleState.rules;
    }

    return ruleState.rules.filter((rule: Rule) => rule.body.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
      <div className={'rules_wrapper slide-left'}>
        <ExtendedInput
            type={'search'}
            placeHolderText={'Type to filter the conventions'}
            handleOnChange={handleOnChange}/>

        {filterRules().map((rule: Rule, index: number) => (
            <RuleBubble key={index} ruleText={rule.body}/>
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
