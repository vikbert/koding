import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";
import IconNotification from "../components/base/icons/IconNotification";

const Good = () => {
  useDocumentTitle('good snippets')
  return (
      <div className="page" id="page-good">
        <Header title={'My favorite snippets'}>
          <div className={'menu-icon'} onClick={() => {}}>
            <IconNotification/>
          </div>
        </Header>
        <section className="page-content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Good;
