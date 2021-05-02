import React, {useEffect} from 'react';
import CodeEditor from "../components/editor/CodeEditor";

const Insert = () => {
  useEffect(() => {
    console.log('Page Insert');
  })

  return (
      <div className="page" id="page-insert">
        <section className="icon">
          <span className="iconify" data-icon="carbon:add-alt" data-inline="false"/>
          <span className="iconify" data-icon="fluent:save-20-regular" data-inline="false"></span>
        </section>
        <section className="content">
          <CodeEditor code={'Enter your code snippet here ...'}/>
        </section>
      </div>
  );
};

export default Insert;
