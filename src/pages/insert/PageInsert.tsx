import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import '../../components/header/header.css';
import Layout from '../Layout';
import FormInsert from './FormInsert';
import StepAside from './StepAside';

const PageInsert = () => {
  useDocumentTitle('Insert new coding convention');
  return (
    <>
      <Layout>
        <div className="container">
          <div className="left-sidebar js-pinned-left-sidebar ps-relative" />
          <div id="content" className="pt0 snippet-hidden">
            <div className="grid ai-center py24 bg-no-repeat bg-right-bottom wide:bg-image-ask-v2 wide:h-ask-v2-background">
              <div className="fs-headline1">Add a new coding convention</div>
            </div>
            <div className="grid ai-start jc-space-between md:fd-column md:ai-stretch">
              <FormInsert />
              <StepAside />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PageInsert;
