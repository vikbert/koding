import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchSnippetsDone} from "../components/code/snippetAction";
import LocalStorageClient from "../services/LocalStorageClient";
import {Snippet} from "../types/Snippet";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";
import './play.css'
import SnippetPreview from "../components/code/SnippetPreview";
import NotificationIcon from "../components/base/NotificationIcon";

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
          <div className={'menu-icon'} onClick={() => null}>
            <NotificationIcon/>
          </div>
        </Header>
        <section className="page-content">
          <div className="container space-evenly">
            <div className="showcase">
              <div className="figure">
                <span className="iconify" data-icon="ic:outline-gpp-bad" data-inline="false"></span>
              </div>
              <h3 style={{color: '#fff'}}>Bad</h3>
            </div>
            <div className="showcase">
              <div className="figure">
                <span className="iconify" data-icon="ic:outline-gpp-good" data-inline="false"></span>
              </div>
              <div className="content">
                <h3 style={{color: '#fff'}}>Good</h3>
              </div>
            </div>
          </div>
          <div className="container centered-xy my-2 ">
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
