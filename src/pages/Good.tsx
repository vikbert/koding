import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";

const Good = () => {
  return (
      <div className="page" id="page-good">
        <section className="header">
          <h5>Favorite Snippets</h5>
        </section>
        <section className="content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Good;
