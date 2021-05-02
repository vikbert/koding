import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import CodeEditor from "../components/editor/CodeEditor";
import LocalStorageClient from "../services/LocalStorageClient";

const Insert = () => {
  const client = new LocalStorageClient();
  const editorState = useSelector((state: any) => state.reduxEditor);

  const handleCreateNew = () => {
    console.log('reset the new editor');
  }

  const handleSave = () => {
    client.addCode(editorState.content.trim());
  }

  useEffect(() => {
    console.log('Load code snippets:', client.list());
  })

  return (
      <div className="page" id="page-insert">
        <section className="icon">
          <span
              onClick={handleCreateNew}
              className="iconify"
              data-icon="carbon:add-alt"
              data-inline="false"/>
         <div onClick={handleSave}>
            <span
                className="iconify"
                data-icon="fluent:save-20-regular"
                data-inline="false"/>
         </div>
        </section>
        <section className="content">
          <CodeEditor code={'Enter your code snippet here ...'}/>
        </section>
      </div>
  );
};

export default Insert;
