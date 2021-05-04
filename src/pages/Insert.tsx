import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addSnippetDone} from "../components/code/snippetAction";
import CodeEditor from "../components/editor/CodeEditor";
import {codeChanged} from "../components/editor/editorAction";
import LocalStorageClient from "../services/LocalStorageClient";
import Thumb from "../components/editor/Thumb";
import {Snippet} from "../types/Snippet";
import {nanoid} from "nanoid";

const Insert = () => {
  const dispatch = useDispatch();
  const editorState = useSelector((state: any) => state.reduxEditor);

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
  }

  useEffect(() => {
    newSnippet = {
      ...newSnippet,
      body: editorState.content,
    }

    console.log(newSnippet);
  }, [editorState])

  return (
      <div className={'page'}>
        <section className="header">
          <span className="action-title">Add new snippet</span>
        </section>
        <section className="content">
          <CodeEditor code={editorState.content}>
            <div className="editor-options">
              <span className="option-lang">php</span>
              <Thumb snippet={editorState.content}/>
              <div className={'option-save'} onClick={handleSave}>
                <span className="iconify" data-icon="fluent:save-20-regular" data-inline="false"/>
              </div>
            </div>
          </CodeEditor>
        </section>
      </div>
  );
}

export default Insert;
