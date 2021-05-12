import React, {useState, useEffect} from 'react'
import useVisibility from "../../hooks/useVisibility";
import {useDispatch} from "react-redux";
import {addRule, receiveRules, showRules} from "./ruleAction";
import {nanoid} from "nanoid";
import ExtendedInput from "../base/ExtendedInput";

const initRule = {body: ''}

export default function InsertRule() {
  const [rule, setRule] = useState(initRule)
  const {visible, show} = useVisibility();
  const dispatch = useDispatch();

  function handleRuleChange(userInput: any) {
    setRule({...rule, body: userInput})
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(addRule({...rule, id: nanoid()}))
    dispatch(showRules())
    showToast();
  }

  function showToast() {
    show();
  }

  useEffect(() => {
    dispatch(receiveRules());
  }, [])

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
};
