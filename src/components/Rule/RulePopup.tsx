import React from 'react';
import {Rule} from "../../types/Rule";
import {useDispatch} from "react-redux";
import {hidePopup, updateRule} from "./ruleAction";

type RulePopupProps = {
  rule: Rule | null,
}

export default function RulePopup(props: RulePopupProps) {
  const dispatch = useDispatch();
  const [rule, setRule] = React.useState<any>(props.rule);

  function handleOnChange(event: any) {
    setRule({...rule, body: event.target.value})
  }

  function handleCancel() {
    dispatch(hidePopup())
  }

  function handleSave() {
    dispatch(updateRule(rule));
    dispatch(hidePopup());
  }

  return props.rule && (
      <div className="overlay open">
        <div className="popup rule-popup">
          <div className="title">
            <span>Edit or assign this Convention</span>
          </div>
          <div className="content">
            <textarea value={rule.body} onChange={handleOnChange}/>
          </div>
          <div className="action">
            <button className={'is-primary is-cleared'} onClick={handleCancel}>cancel</button>
            <button className={'is-success is-cleared'} onClick={handleSave}>save</button>
          </div>
        </div>
      </div>
  );
};
