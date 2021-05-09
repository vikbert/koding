import React from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/base/Header";
import NotificationIcon from "../components/base/NotificationIcon";

const Home = () => {
  useDocumentTitle('Home')
  return (
      <div className="page">
        <Header title={'Home'}>
          <div className={'menu-icon'} onClick={() => {
          }}>
            <NotificationIcon/>
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
