import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchSnippetsDone} from "../components/code/snippetAction";
import CodeEditor from "../components/editor/CodeEditor";
import LocalStorageClient from "../services/LocalStorageClient";
import {Snippet} from "../types/Snippet";

const Play = () => {
  const client = new LocalStorageClient();
  const dispatch = useDispatch();
  const snippets = useSelector((state: any) => state.reduxSnippet);
  console.log(snippets);

  const [items, setItems] = React.useState([]);

  useEffect(() => {
    const snippets = client.list();
    // @ts-ignore
    setItems(snippets);
    dispatch(fetchSnippetsDone(snippets));
  }, [])

  return (
      <div className="page" id="page-play">
        <section className="header">
          <div className="title">Play Snippets</div>
        </section>
        <section className="content">
          {snippets.map((item: Snippet, index: string) => (
              <CodeEditor key={item.id} code={item.body} disabled={true}>
                <div className="editor-options">
                  <span className="option-lang">{item.lang}</span>
                </div>
              </CodeEditor>
          ))}
        </section>
      </div>
  );
};

export default Play;
