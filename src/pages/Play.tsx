import React, {useEffect} from 'react';
import DemoEditor from "../components/editor/DemoEditor";

const Play = () => {
  useEffect(() => {
    console.log('Page Play');
  })

  return (
      <div className="page" id="page-play">
        <section className="icon">
          <span className="iconify" data-icon="ant-design:play-circle-outlined" data-inline="false"/>
        </section>
        <section className="content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Play;
