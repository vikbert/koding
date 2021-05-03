import React from 'react';
import DemoEditor from "../components/editor/DemoEditor";

const Home = () => {
  return (
      <div className="page" id="page-home">
        <section className="icon">
          <span className="iconify" data-icon="fluent:home-12-regular" data-inline="false"/>
        </section>
        <section className="content">
          <DemoEditor/>
        </section>
      </div>
  );
};

export default Home;
