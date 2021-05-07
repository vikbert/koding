import React, {useState, useEffect} from 'react'
import useVisibility from "../../hooks/useVisibility";
import Toast from "../toast";
import {useDispatch} from "react-redux";
import {addRule, fetchRules, showRules} from "./ruleAction";
import {nanoid} from "nanoid";

const initRule = {body: ''}
const InsertRule = () => {
  const [rule, setRule] = useState(initRule)
  const {visible, show} = useVisibility();
  const dispatch = useDispatch();

  function handleRuleChange(event: any) {
    setRule({...rule, body: event.target.value})
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    dispatch(addRule({...rule, id: nanoid()}))
    dispatch(showRules())
    showToast();

    setRule(initRule);
  }

  function showToast() {
    show();
  }

  useEffect(() => {
    dispatch(fetchRules());
  }, [])

  return (
      <div className="container">
        <form className={'py-2'} onSubmit={handleSubmit}>
          {visible && <Toast type={'success'} title={"It's done."} description={''}/>}
          <input
              type="text"
              value={rule.body}
              onChange={handleRuleChange}
              placeholder={'Enter a new coding convention'}/>
        </form>
      </div>
  );
};

export default InsertRule
