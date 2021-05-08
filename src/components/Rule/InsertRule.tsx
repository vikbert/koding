import React, {useState, useEffect} from 'react'
import useVisibility from "../../hooks/useVisibility";
import Toast from "../toast";
import {useDispatch} from "react-redux";
import {addRule, fetchRules, showRules} from "./ruleAction";
import {nanoid} from "nanoid";
import ExtendedInput from "../base/ExtendedInput";

const initRule = {body: ''}
const InsertRule = () => {
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
    dispatch(fetchRules());
  }, [])

  return (
      <>
        <form className={'py-2'} onSubmit={handleSubmit} id={'snippet-form'}>
          {visible && <Toast type={'success'} title={"It's done."} description={''}/>}
          <ExtendedInput
              type={'add'}
              initValue={rule.body}
              placeHolderText={'Enter a new coding convention'}
              handleOnChange={(userInput) => handleRuleChange(userInput)}
          />
          <div className="rule_bubble rule_preview space-between">
            <p>{rule.body}</p>
          </div>
        </form>
      </>
  );
};

export default InsertRule
