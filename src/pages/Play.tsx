import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchSnippetsDone} from "../components/code/snippetAction";
import LocalStorageClient from "../services/LocalStorageClient";
import {Snippet} from "../types/Snippet";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";
import ReadOnlyEditor from "../components/editor/ReadOnlyEditor";
import EditorOption from "../components/code/EditorOption";
import './play.css'

const Play = () => {
  useDocumentTitle('Play snippets')
  const client = new LocalStorageClient();
  const dispatch = useDispatch();
  const snippets = useSelector((state: any) => state.reduxSnippet);

  useEffect(() => {
    const snippets = client.listSnippets();
    dispatch(fetchSnippetsDone(snippets));
  }, [])

  return (
      <div className="page" id="page-play">
        <Header title={'Review Snippets'}>
          <div className={'menu-icon'} onClick={() => {
          }}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>
        <section className="page-content">
          <div className="container grid-rows">
            {snippets.map((item: Snippet, index: string) => (
                <ReadOnlyEditor key={item.id} code={item.body} disabled={true}>
                  <EditorOption isBad={item.isBad} lang={item.lang}/>
                </ReadOnlyEditor>
            ))}
          </div>

        </section>
      </div>
  );
};

export default Play;
