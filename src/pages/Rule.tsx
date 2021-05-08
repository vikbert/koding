import React from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";

const Rule = () => {
  useDocumentTitle('Bad snippets')

  function handleOnClick() {

  }

  return (
      <div className="page" id="page-bad">
        <Header title={'Coding Conventions'}>
          <div className={'menu-icon'} onClick={handleOnClick}>
            <span className="iconify" data-icon="carbon:rule" data-inline="false"/>
          </div>
        </Header>
        <section className="page-content">
          <div className="container">
          </div>
        </section>
      </div>
  );
};

export default Rule;
