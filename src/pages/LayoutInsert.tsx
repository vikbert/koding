import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './header.css';
import Layout from './Layout';
import OverflowInsert from './OverflowInsert';

const LayoutInsert = () => {
  useDocumentTitle('Insert new coding convention');
  return (
    <>
      <Layout>
        <OverflowInsert />
      </Layout>
    </>
  );
};

export default LayoutInsert;
