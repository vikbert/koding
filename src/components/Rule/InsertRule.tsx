import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addRule, receiveRules, showRules} from './ruleAction';
import {nanoid} from 'nanoid';
import ExtendedInput from '../input/ExtendedInput';

export default function InsertRule() {
  const [rule, setRule] = useState({body: ''});

  const dispatch = useDispatch();

  function handleRuleChange(userInput: any) {
    setRule({...rule, body: userInput});
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(addRule({...rule, id: nanoid()}));
    dispatch(showRules());
  }

  useEffect(() => {
    dispatch(receiveRules());
  }, []);

  return (
    <form className={'py-2'} onSubmit={handleSubmit} id={'snippet-form'}>
      <ExtendedInput
        type={'add'}
        initValue={rule.body}
        placeHolderText={'Enter a new coding convention'}
        handleOnChange={(userInput) => handleRuleChange(userInput)}
      />
    </form>
  );
}
