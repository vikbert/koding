import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addSnippetDone} from "../components/code/snippetAction";
import CodeEditor from "../components/editor/CodeEditor";
import {codeChanged} from "../components/editor/editorAction";
import LocalStorageClient from "../services/LocalStorageClient";
import Thumb from "../components/editor/Thumb";
import {Snippet} from "../types/Snippet";
import {nanoid} from "nanoid";
import Toast from "../components/toast";
import {Config} from "../hooks/useToast";

const Insert = () => {
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

  const resetEditor = () => {
    dispatch(codeChanged(''));
  }

  const handleSave = () => {
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

  return (
      <div className={'page'}>
        {visible && <Toast type={config.type} title={config.title} description={''}/>}
        <section className="header">
          <span className="title">Add new snippets</span>
        </section>
        <section className="content">
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
        </section>
      </div>
  );
}

export default Insert;
