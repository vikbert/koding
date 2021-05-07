import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Good = () => {
  useDocumentTitle('good snippets')
  return (
      <div className="page" id="page-good">
        <section className="header">
          <h5>Favorite Snippets</h5>
        </section>
        <section className="page-content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Good;
