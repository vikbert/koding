import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import '../../components/header/header.css';
import Layout from '../Layout';
import FormInsert from './FormInsert';
import AsideInsert from './aside/AsideInsert';

const PageInsert = () => {
  useDocumentTitle('Insert new coding convention');
  return (
    <>
      <Layout>
        <div id="content" className="snippet-hidden">
          <div className="grid ai-center py24 bg-no-repeat bg-right-bottom wide:bg-image-ask-v2 wide:h-ask-v2-background">
            <div className="fs-headline1">Add a new coding convention</div>
          </div>
          <div id="mainbar">
            <div className="grid">
              <FormInsert />
            </div>
          </div>
          <div id="sidebar">
            <AsideInsert />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PageInsert;
