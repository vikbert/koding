import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addSnippet} from "../../components/code/snippetAction";
import Thumb from "../../components/editor/Thumb";
import {nanoid} from "nanoid";
import useNotify from "../../hooks/useToast";
import RulesList from "../../components/Rule/RulesList";
import {hideRules, showRules, fetchRules} from "../../components/Rule/ruleAction";
import RulePopup from "../../components/Rule/RulePopup";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Header from "../../components/base/Header";
import './insert.css'
import EditorHeader from "../../components/editor/EditorHeader";

const initState = {bad: '', good: ''};
export default function Insert() {
  useDocumentTitle('Insert snippet and convention');

  const dispatch = useDispatch();
  const notify = useNotify();
  const ruleState = useSelector((state: any) => state.reduxRule);
  const [editorState, setEditorState] = React.useState(initState);

  function resetEditor() {
    setEditorState(initState)
  }

  function handleToggleRulesWrapper() {
    dispatch(ruleState.showWrapper ? hideRules() : showRules())
  }

  function insertCode(code: string, isBad: boolean) {
    dispatch(addSnippet({
      id: nanoid(),
      body: code,
      isBad,
      lang: 'php'
    }))
  }

  function handleOnSubmit(event: any) {
    event.preventDefault();

    if (editorState.bad.length === 0 || editorState.good.length === 0) {
      notify({type: 'warning', message: 'Both Code snippets should not be empty!'});
      return;
    }

    insertCode(editorState.bad, true);
    insertCode(editorState.good, false);
    resetEditor();
    notify({type: 'success', message: 'Both Code snippets are added!'});

  }

  React.useEffect(() => {
    dispatch(fetchRules());
  }, [])


  function handleOnChangeBad(event: any) {
    setEditorState({
      ...editorState,
      bad: event.target.value,
    })
  }

  function handleOnChangeGood(event: any) {
    setEditorState({
      ...editorState,
      good: event.target.value,
    })
  }

  return (
      <div className={'page page__insert'}>
        {ruleState.showPopup && (
            <RulePopup rule={ruleState.targetRule}/>
        )}

        <Header title={'Add Snippets'}>
          <div className={'menu-icon'} onClick={handleToggleRulesWrapper}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>

        <section className="page-content">
          <div className="container">
            <form onSubmit={handleOnSubmit}>
              <div className="row space-between my-2">
                <div className="editor-wrapper">
                  <EditorHeader/>
                  <textarea
                      name={'bad'}
                      rows={15}
                      placeholder={'Bad snippet'}
                      value={editorState.bad}
                      onChange={handleOnChangeBad}/>
                  <div className="editor-options">
                    <span className="option-lang">php</span>
                    <Thumb bad={true}/>
                    <span></span>
                  </div>
                </div>
                <div className="editor-wrapper">
                  <EditorHeader/>
                  <textarea
                      name={'good'}
                      rows={15}
                      placeholder={'Good snippet'}
                      value={editorState.good}
                      onChange={handleOnChangeGood}/>
                  <div className="editor-options">
                    <span className="option-lang">php</span>
                    <Thumb bad={false}/>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="centered-xy">
                <button type="submit" className={'is-warning is-rounded box-shadow'}>
                  save the snippets
                </button>
              </div>
            </form>
          </div>
          {ruleState.showWrapper && (<RulesList/>)}
        </section>
      </div>
  );
}
