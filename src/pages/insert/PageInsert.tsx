import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import '../../components/header/header.css';
import FormInsert from '../../components/Rule/form/FormInsert';
import AsideInformation from '../../components/aside/AsideInformation';

const PageInsert = () => {
  useDocumentTitle('Insert new coding convention');

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/img/bg-robot.svg'
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
        className="grid ai-center py24 bg-no-repeat bg-right-bottom wide:bg-image-ask-v2 wide:h-ask-v2-background"
      >
        <div className="fs-headline1">Add a new coding convention</div>
      </div>
      <div id="mainbar">
        <div className="grid">
          <FormInsert />
        </div>
      </div>
      <div id="sidebar">
        <AsideInformation title={'Clean up the code'}>
          <p>
            Be sure you have removed all unnecessary spaces and tabs, try to
            clean up the code snippet at first. <br />
            Try
            <a
              href="https://webformatter.com/html"
              className="s-btn s-btn__sm"
              target="_blank"
            >
              https://webformatter.com/
            </a>
          </p>
        </AsideInformation>
      </div>
    </>
  );
};

export default PageInsert;
