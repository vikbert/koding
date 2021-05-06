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
import InsertConvention from "../../components/Convention/InsertConvention";

export default function Insert () {
  const dispatch = useDispatch();
  const editorState = useSelector((state: any) => state.reduxEditor);
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


  return (
      <div className={'page page__insert'}>
        {visible && <Toast type={config.type} title={config.title} description={''}/>}
        <section className="header">
          <h5>Add new snippets</h5>
        </section>
        <section className="content">
          {/*<InsertConvention/>*/}
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
          <InsertSnippets/>
        </section>
      </div>
  );
}
