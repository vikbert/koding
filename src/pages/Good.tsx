import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";

const Good = () => {
  return (
      <div className="page" id="page-good">
        <section className="header">
          <div className="action-title">Favorite Snippets</div>
        </section>
        <section className="content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Good;
