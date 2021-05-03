import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addSnippetDone} from "../components/code/codeAction";
import CodeEditor from "../components/editor/CodeEditor";
import {codeChanged} from "../components/editor/editorAction";
import LocalStorageClient from "../services/LocalStorageClient";

const Insert = () => {
  const dispatch = useDispatch();
  const editorState = useSelector((state: any) => state.reduxEditor);
  const [newSnippet, setNewSnippet] = React.useState(editorState.content);

  const handleCreateNew = () => {
    setNewSnippet('');
    dispatch(codeChanged(''));
  }

  const handleSave = () => {
    const snippet = editorState.content.trim();

    const localStorageClient = new LocalStorageClient();
    localStorageClient.addCode(snippet);

    dispatch(addSnippetDone(snippet));
  }

  return (
      <div className="page" id="page-insert">
        <section className="icon">
          <span className="action-title">Add new snippet</span>
        </section>
        <section className="content">
          <CodeEditor code={newSnippet}>
            <div className="editor-options">
              <span className="option-lang">php</span>
              <div onClick={handleCreateNew}>
                <span className="iconify"
                      data-icon="bx:bx-reset"
                      data-inline="true"/>
              </div>

              <div onClick={handleSave}>
                <span className="iconify"
                      data-icon="fluent:save-20-regular"
                      data-inline="false"/>
              </div>
            </div>
          </CodeEditor>
        </section>
      </div>
  );
};

export default Insert;
