import React from 'react'
import type {Rule} from '../../types/Rule'
import {useDispatch, useSelector} from 'react-redux'
import {hidePopup, updateRule, deleteRule} from './ruleWidget'
import useNotify from '../../hooks/useToast'

type RulePopupProps = {
  rule: Rule | null,
}

export default function RulePopup(props: RulePopupProps) {
  const dispatch = useDispatch()
  const notify = useNotify()
  const [rule, setRule] = React.useState<any>(props.rule)
  const editorState = useSelector((state: any) => state.reduxEditor)

  function handleOnChange(event: any) {
    setRule({...rule, body: event.target.value})
  }

  function handleCancel() {
    dispatch(hidePopup())
  }

  function handleSave() {
    dispatch(updateRule(rule))
    dispatch(hidePopup())
    notify({type: 'success', message: 'updated!'})
  }

  function handleDelete() {
    dispatch(deleteRule(rule))
    dispatch(hidePopup())
    notify({type: 'success', message: 'This convention is deleted!'})
  }

  function handleAddSnippet() {
    const updatedRule = {
      ...rule,
      snippets: [editorState.snippetId, ...(rule.snippets || [])],
    }
    dispatch(updateRule(updatedRule))
    notify({type: 'success', message: 'snippet added!'})
  }

  return (
    props.rule && (
      <div className="overlay open">
        <div className="popup rule-popup">
          <div className="title">
            <h4>Edit or assign this Convention</h4>
          </div>
          <div className="content">
            <textarea value={rule.body} onChange={handleOnChange} />
            {rule.snippets && (
              <div className="container my-2">
                <h5 style={{marginBottom: '0'}}>Code Snippets:</h5>
                {rule.snippets.map(
                  (snippetId: string) =>
                    snippetId && (
                      <li key={snippetId} className={'small'}>
                        {snippetId}
                      </li>
                    ),
                )}
              </div>
            )}
          </div>

          <div className="action">
            <button className={'is-primary is-cleared'} onClick={handleCancel}>
              cancel
            </button>
            <button
              className={'is-primary is-cleared is-error'}
              onClick={handleDelete}
            >
              delete
            </button>
            {editorState.snippetId && (
              <>
                <button
                  className={'is-primary is-cleared is-error'}
                  onClick={handleAddSnippet}
                >
                  add snippet
                </button>
              </>
            )}
            <button className={'is-success is-cleared'} onClick={handleSave}>
              save
            </button>
          </div>
        </div>
      </div>
    )
  )
}
