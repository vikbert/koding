import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import '../../components/header/header.css';
import Layout from '../Layout';
import OverflowInsert from './OverflowInsert';

const PageInsert = () => {
  useDocumentTitle('Insert new coding convention');
  return (
    <>
      <Layout>
        <OverflowInsert />
      </Layout>
    </>
  );
};

export default PageInsert;
