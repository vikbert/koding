import React from 'react';
import {Rule} from "../../types/Rule";
import {useDispatch} from "react-redux";
import {hidePopup, updateRule, deleteRule} from "./ruleAction";
import useNotify from "../../hooks/useToast";

type RulePopupProps = {
  rule: Rule | null,
}

export default function RulePopup(props: RulePopupProps) {
  const dispatch = useDispatch();
  const notify = useNotify();
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
    notify({type: 'success', message: 'updated!'})
  }

  function handleDelete() {
    dispatch(deleteRule(rule))
    dispatch(hidePopup())
    notify({type: 'success', message: 'This convention is deleted!'})
  }

  return props.rule && (
      <div className="overlay open">
        <div className="popup rule-popup">
          <div className="title">
            <h4>Edit or assign this Convention</h4>
          </div>
          <div className="content">
            <textarea value={rule.body} onChange={handleOnChange}/>
          </div>
          <div className="action">
            <button className={'is-primary is-cleared'} onClick={handleCancel}>cancel</button>
            <button className={'is-primary is-cleared is-error'} onClick={handleDelete}>delete</button>
            <button className={'is-success is-cleared'} onClick={handleSave}>save</button>
          </div>
        </div>
      </div>
  );
};
