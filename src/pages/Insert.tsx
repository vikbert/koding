import React, {useEffect} from 'react';
import CodeEditor from "../components/editor/CodeEditor";
import LocalStorageClient from "../services/LocalStorageClient";

const Insert = () => {
  const client = new LocalStorageClient();

  const handleInsert = () => {
    console.log('click to insert new code snippets');
  }

  const handleSave = () => {
    console.log('click to save the new code');
  }

  useEffect(() => {
    console.log('Load code snippets:', client.list());
  })

  return (
      <div className="page" id="page-insert">
        <section className="icon">
          <span
              onClick={handleInsert}
              className="iconify"
              data-icon="carbon:add-alt"
              data-inline="false"/>
          <span
              onClick={handleSave}
              className="iconify"
              data-icon="fluent:save-20-regular"
              data-inline="false"/>
        </section>
        <section className="content">
          <CodeEditor code={'Enter your code snippet here ...'}/>
        </section>
      </div>
  );
};

export default Insert;
