import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addSnippet} from "../../components/code/snippetAction";
import Thumb from "../../components/editor/Thumb";
import {nanoid} from "nanoid";
import useNotify from "../../hooks/useToast";
import RulesList from "../../components/Rule/RulesList";
import {hideRules, showRules, receiveRules} from "../../components/Rule/ruleAction";
import RulePopup from "../../components/Rule/RulePopup";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Header from "../../components/base/Header";
import './insert.css'
import EditorHeader from "../../components/editor/EditorHeader";
import {Snippet} from "../../types/Snippet";
import IconNotification from "../../components/base/icons/IconNotification";
import {updateSnippetId} from "../../components/editor/editorAction";

const initState = {bad: '', good: '', id: nanoid()};
export default function Insert() {
  useDocumentTitle('new snippet and convention');

  const dispatch = useDispatch();
  const notify = useNotify();
  const ruleState = useSelector((state: any) => state.reduxRule);
  const [editorState, setEditorState] = React.useState(initState);

  React.useEffect(() => {
    dispatch(receiveRules())
  }, [])

  function resetEditor() {
    setEditorState(initState)
  }

  function handleToggleRulesWrapper() {
    dispatch(ruleState.showWrapper ? hideRules() : showRules())
  }

  function handleOnSubmit(event: any) {
    event.preventDefault();

    if (editorState.bad.length === 0 || editorState.good.length === 0) {
      notify({type: 'error', message: 'Both Code snippets should not be empty!'});
      return;
    }

    const goodSnippet = {
      id: nanoid(),
      body: editorState.good,
      isBad: false,
      lang: 'php'
    }

    const badSnippet: Snippet = {
      id: initState.id,
      body: editorState.bad,
      isBad: true,
      lang: 'php',
      suggestion: goodSnippet.id,
    }

    dispatch(addSnippet(goodSnippet));
    dispatch(addSnippet(badSnippet));
    resetEditor();
    notify({type: 'success', message: 'Both Code snippets are added!'});

  }

  function handleChangeBadSnippet(event: any) {
    setEditorState({
      ...editorState,
      bad: event.target.value,
    })
  }

  function handleChangeGoodSnippet(event: any) {
    event.preventDefault();
    setEditorState({
      ...editorState,
      good: event.target.value,
    })
  }

  function handleAssignConvention() {
    dispatch(showRules());
  }

  React.useEffect(() => {
  	if (editorState.bad.length > 0) {
      dispatch(updateSnippetId(initState.id))
    }
  }, [editorState])

  return (
      <div className={'page page__insert'}>
        {ruleState.showPopup && (
            <RulePopup rule={ruleState.targetRule}/>
        )}

        <Header title={'Add Snippets'}>
          <div className={'menu-icon'} onClick={handleToggleRulesWrapper}>
            <IconNotification/>
          </div>
        </Header>

        <section className="page-content">
          <div className="container text-centered">
            <h2>New snippets</h2>
          </div>
          <div className="container">
            <form onSubmit={handleOnSubmit}>
              <div className="row space-between my-1">
                <div className="editor-wrapper">
                  <EditorHeader/>
                  <textarea
                      name={'bad'}
                      rows={15}
                      placeholder={'Bad snippet'}
                      value={editorState.bad}
                      onChange={handleChangeBadSnippet}/>
                  <div className="editor-options">
                    <Thumb bad={true}/>
                    <span/>
                  </div>
                </div>
                <div className="editor-wrapper  ">
                  <EditorHeader/>
                  <textarea
                      name={'good'}
                      rows={15}
                      placeholder={'Good snippet'}
                      value={editorState.good}
                      onChange={handleChangeGoodSnippet}/>
                  <div className="editor-options">
                    <Thumb bad={false}/>
                    <span/>
                  </div>
                </div>
              </div>
              <div className="space-evenly" style={{marginBottom: '4.8rem'}}>
                <button
                    type={'button'}
                    className={'is-warning is-rounded box-shadow mx-1'}
                    onClick={handleAssignConvention}>
                  <IconNotification/>&nbsp;&nbsp;
                  assign coding convention
                </button>
                <button
                    type="submit"
                    className={'is-warning is-rounded box-shadow mx-1'}>
                  <span className="iconify" data-icon="codicon:save" style={{fontSize: '25px'}}/>&nbsp;&nbsp;
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
