import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchSnippetsDone} from "../components/code/codeAction";
import CodeEditor from "../components/editor/CodeEditor";
import LocalStorageClient from "../services/LocalStorageClient";

const Play = () => {
  const client = new LocalStorageClient();
  const dispatch = useDispatch();
  const snippets = useSelector((state: any) => state.reduxCode);

  const [items, setItems] = React.useState([]);

  useEffect(() => {
    const snippets = client.list();
    // @ts-ignore
    setItems(snippets);
    dispatch(fetchSnippetsDone(snippets));
  }, [])

  return (
      <div className="page" id="page-play">
        <section className="icon">
          <span className="iconify" data-icon="ant-design:play-circle-outlined" data-inline="false"/>
        </section>
        <section className="content">
          {snippets.map((item: string, index: string) => (
              <CodeEditor key={index} code={item}>
                <div className="editor-options">
                  <span className="option-lang">php</span>
                </div>
              </CodeEditor>
          ))}
        </section>
      </div>
  );
};

export default Play;
