import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";

const Bad = () => {
  useDocumentTitle('Bad snippets')
  return (
      <div className="page" id="page-bad">
        <Header title={'Vote snippets'}>
          <div className={'menu-icon'} onClick={() => {
          }}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>
        <section className="page-content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Bad;
