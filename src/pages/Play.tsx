import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchSnippetsDone} from "../components/code/snippetAction";
import LocalStorageClient from "../services/LocalStorageClient";
import {Snippet} from "../types/Snippet";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";
import './play.css'
import SnippetPreview from "../components/code/SnippetPreview";
import IconNotification from "../components/base/icons/IconNotification";

const Play = () => {
  useDocumentTitle('Play snippets')
  const client = new LocalStorageClient();
  const dispatch = useDispatch();
  const snippets = useSelector((state: any) => state.reduxSnippet);

  type ShowCaseProps = {
    title: string,
    children: any,
  }

  const ShowCase = (props: ShowCaseProps) => {
    return (
        <div className="showcase">
          <div className="figure">
            {props.children}
          </div>
          <h3 style={{color: '#fff', lineHeight: '1.6', marginBottom: '0'}}>{props.title}</h3>
        </div>
    );
  };

  useEffect(() => {
    const snippets = client.listSnippets();
    dispatch(fetchSnippetsDone(snippets));
  }, [])

  return (
      <div className="page" id="page-play">
        <Header title={'Review Snippets'}>
          <div className={'menu-icon'} onClick={() => null}>
            <IconNotification/>
          </div>
        </Header>
        <section className="page-content">
          <div className="container space-evenly">
            <ShowCase title={'Bad'}>
              <span className="iconify" data-icon="ic:outline-gpp-bad" data-inline="false"/>
            </ShowCase>
            <ShowCase title={'Good'}>
              <span className="iconify" data-icon="ic:outline-gpp-good" data-inline="false"/>
            </ShowCase>
          </div>
          <div className="container centered-xy">
            {snippets
                .filter((item: Snippet) => item.isBad).map((item: Snippet, index: string) => (
                    <SnippetPreview snippet={item} key={index}/>
                ))}
          </div>
        </section>
      </div>
  );
};

export default Play;
