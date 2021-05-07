import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Bad = () => {
  useDocumentTitle('Bad snippets')
  return (
      <div className="page" id="page-bad">
        <section className="header">
          <h5>Bad Snippets</h5>
        </section>
        <section className="page-content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Bad;
