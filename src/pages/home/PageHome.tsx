import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Layout from '../Layout';
import OverflowTopRules from './OverflowTopRules';
import AsideHome from './AsideHome';

const PageHome = () => {
  useDocumentTitle('Top coding conventions');
  return (
    <>
      <Layout>
        <div id="content" className="snippet-hidden">
          <div id="mainbar">
            <OverflowTopRules />
          </div>
          <div id="sidebar">
            <AsideHome />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PageHome;
