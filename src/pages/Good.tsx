import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";

const Good = () => {
  useDocumentTitle('good snippets')
  return (
      <div className="page" id="page-good">
        <Header title={'My favorite snippets'}>
          <div className={'menu-icon'} onClick={() => {}}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>
        <section className="page-content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Good;
