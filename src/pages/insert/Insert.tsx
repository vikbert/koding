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
          <div className={'action-save'} onClick={handleSave}>
            <div className="bg-black rounded-md">
              <span className="iconify" data-icon="fluent:save-20-regular" data-inline="false"/>
            </div>
          </div>
        </>
    );
  }

  function handleToggleRulesWrapper() {
    dispatch(ruleState.showWrapper ? hideRules() : showRules())
  }

  return (
      <div className={'page page__insert'}>
        {ruleState.showPopup && (
            <RulePopup rule={ruleState.targetRule}/>
        )}

        {visible && <Toast type={config.type} title={config.title} description={''}/>}

        <Header title={'Add Snippets and convention'}>
          <div className={'menu-icon'} onClick={handleToggleRulesWrapper}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>

        <section className="page-content">
          <InsertRule/>
          {/*<InsertSnippets/>*/}
          {ruleState.showWrapper && (<RulesList/>)}
        </section>
      </div>
  );
}
