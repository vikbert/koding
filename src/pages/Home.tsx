import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Header from '../components/base/Header';
import IconNotification from '../components/base/icons/IconNotification';

const Home = () => {
  useDocumentTitle('Home');
  return (
    <div className="page">
      <Header title={'Home'}>
        <div className={'menu-icon'} onClick={() => null}>
          <IconNotification />
        </div>
      </Header>
      <section className="page-content centered-xy">
        <div className="container">
          <h1>home</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
