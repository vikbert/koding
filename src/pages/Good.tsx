import React, {useEffect} from 'react';
import DemoEditor from "../components/editor/DemoEditor";

const Good = () => {
  useEffect(() => {
    console.log('Page Good');
  })

  return (
      <div className="page" id="page-good">
        <section className="icon">
          <span className="iconify" data-icon="ic:outline-thumb-up-off-alt" data-inline="false"/>
        </section>
        <section className="content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Good;
