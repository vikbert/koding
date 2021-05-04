import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";

const Bad = () => {
  return (
      <div className="page" id="page-bad">
        <section className="header">
          <div className="action-title">Bad Snippets</div>
        </section>
        <section className="content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Bad;
