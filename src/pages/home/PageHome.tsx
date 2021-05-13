import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import '../../components/header/header.css';
import Layout from '../Layout';
import OverflowTopRules from './OverflowTopRules';

const PageHome = () => {
  useDocumentTitle('Top coding conventions');
  return (
    <>
      <Layout>
        <OverflowTopRules />
      </Layout>
    </>
  );
};

export default PageHome;
