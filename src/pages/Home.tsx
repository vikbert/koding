import React from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";
import SnippetPreview from "../components/code/SnippetPreview";

const Home = () => {
  useDocumentTitle('Home')
  return (
      <div className="page">
        <Header title={'Home'}>
          <div className={'menu-icon'} onClick={() => {}}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>
        <section className="page-content centered-xy">
          <div className="container">
            <h1>home</h1>
            <SnippetPreview/>
          </div>
        </section>
      </div>
  );
};

export default Home;
