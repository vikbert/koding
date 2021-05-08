import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";
import InsertRule from "../components/Rule/InsertRule";

const Rule = () => {
  useDocumentTitle('Bad snippets')
  return (
      <div className="page" id="page-bad">
        <Header title={'Coding Conventions'}>
          <div className={'menu-icon'} onClick={() => {}}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>
        <section className="page-content">
          <div className="container">
            <InsertRule/>
          </div>
        </section>
      </div>
  );
};

export default Rule;
