import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addSnippetDone} from "../../components/code/snippetAction";
import CodeEditor from "../../components/editor/CodeEditor";
import {codeChanged} from "../../components/editor/editorAction";
import LocalStorageClient from "../../services/LocalStorageClient";
import Thumb from "../../components/editor/Thumb";
import {Snippet} from "../../types/Snippet";
import {nanoid} from "nanoid";
import Toast from "../../components/toast";
import {Config} from "../../hooks/useToast";
import InsertRule from "../../components/Rule/InsertRule";
import RulesList from "../../components/Rule/RulesList";
import {hideRules, showRules} from "../../components/Rule/ruleAction";
import RulePopup from "../../components/Rule/RulePopup";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Header from "../../components/base/Header";
import './insert.css'

export default function Insert() {
  useDocumentTitle('Insert snippet and convention');
  const dispatch = useDispatch();
  const editorState = useSelector((state: any) => state.reduxEditor);
  const ruleState = useSelector((state: any) => state.reduxRule);
  const [visible, setVisible] = useState(false);
  const config: Config = {
    type: 'success',
    title: 'Saving snippet done',
    description: ''
  }

  let newSnippet: Snippet = {
    id: nanoid(),
    isBad: true,
    body: editorState.content,
    lang: 'php',
  }

  function resetEditor() {
    dispatch(codeChanged(''));
  }

  function handleSave() {
    const localStorageClient = new LocalStorageClient();
    localStorageClient.saveSnippet(newSnippet);

    dispatch(addSnippetDone());
    resetEditor();
    setVisible(true)
  }


  useEffect(() => {
    newSnippet = {
      ...newSnippet,
      body: editorState.content,
    }
  }, [editorState])

  function InsertSnippets() {
    return (
        <>
          <CodeEditor code={editorState.content}>
            <div className="editor-options">
              <span className="option-lang">php</span>
              <Thumb bad={true}/>
              <span></span>
            </div>
          </CodeEditor>
          <CodeEditor code={editorState.content}>
            <div className="editor-options">
              <span className="option-lang">php</span>
              <Thumb bad={false}/>
              <span></span>
            </div>
          </CodeEditor>
        </>
    );
  }

  function handleToggleRulesWrapper() {
    dispatch(ruleState.showWrapper ? hideRules() : showRules())
  }

  function handleOnSubmit(event: any) {
    console.log(event.currentTarget);
  }

  return (
      <div className={'page page__insert'}>
        {ruleState.showPopup && (
            <RulePopup rule={ruleState.targetRule}/>
        )}

        {visible && <Toast type={config.type} title={config.title} description={''}/>}

        <Header title={'Add Snippets'}>
          <div className={'menu-icon'} onClick={handleToggleRulesWrapper}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>

        <section className="page-content">
          <div className="container">
            <form onSubmit={handleOnSubmit}>
              <div className="row space-between my-2">
                <InsertSnippets/>
              </div>
              <div className="centered-xy">
                <button className={'is-warning is-rounded box-shadow'} onClick={handleSave}>
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
