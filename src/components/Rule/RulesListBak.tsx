import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import type {Rule} from '../../types/Rule';
import './rule.css';
import ExtendedInput from '../input/ExtendedInput';
import {showPopup} from './ruleWidget';

export default function RulesListBak() {
  const [filter, setFilter] = React.useState('');
  const ruleState = useSelector((state: any) => state.reduxRule);
  const dispatch = useDispatch();

  const handleOnChange = (userInput: string) => {
    setFilter(userInput);
  };

  const filterRules = () => {
    if (filter.length === 0) {
      return ruleState.rules;
    }

    return ruleState.rules.filter((rule: Rule) =>
      rule.title.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const handleOpenRulePopup = (rule: Rule) => {
    dispatch(showPopup(rule));
  };

  return (
    <div className={'rules_wrapper slide-left'}>
      <ExtendedInput
        type={'search'}
        initValue={''}
        placeHolderText={'Type to filter the conventions'}
        handleOnChange={handleOnChange}
      />

      {filterRules().map((rule: Rule, index: number) => (
        <div
          className="rule_bubble"
          key={index}
          onClick={() => handleOpenRulePopup(rule)}
        >
          <p>{rule.title}</p>
        </div>
      ))}

      {filterRules().length === 0 && (
        <div className="container my-2">
          <h4>no convention matched</h4>
        </div>
      )}
    </div>
  );
}
