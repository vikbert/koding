import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchSnippetsDone} from "../components/code/snippetAction";
import CodeEditor from "../components/editor/CodeEditor";
import LocalStorageClient from "../services/LocalStorageClient";
import {Snippet} from "../types/Snippet";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";

const Play = () => {
  useDocumentTitle('Play snippets')
  const client = new LocalStorageClient();
  const dispatch = useDispatch();
  const snippets = useSelector((state: any) => state.reduxSnippet);

  const [items, setItems] = React.useState([]);

  useEffect(() => {
    const snippets = client.listSnippets();
    // @ts-ignore
    setItems(snippets);
    dispatch(fetchSnippetsDone(snippets));
  }, [])

  return (
      <div className="page" id="page-play">
        <Header title={'Review Snippets'}>
          <div className={'menu-icon'} onClick={() => {}}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>
        <section className="page-content">
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
