import React, {useEffect} from 'react';
import DemoEditor from "../components/editor/DemoEditor";

const Bad = () => {
  useEffect(() => {
    console.log('Page Bad');
  })

  return (
      <div className="page" id="page-bad">
        <section className="icon">
          <span className="iconify" data-icon="ic:outline-thumb-down-off-alt" data-inline="false"/>
        </section>
        <section className="content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Bad;
