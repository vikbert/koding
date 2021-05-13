import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './header.css';
import Layout from './Layout';
import OverflowContent from './OverflowContent';

const LayoutHome = () => {
  useDocumentTitle('Top coding conventions');
  return (
    <>
      <Layout>
        <OverflowContent />
      </Layout>
    </>
  );
};

export default LayoutHome;
