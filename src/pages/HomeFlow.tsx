import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './header.css';
import HeaderOverflow from './HeaderOverflow';
import SidebarOverflow from './SidebarOverflow';
import ContentOverflow from "./ContentOverflow";

const Home = () => {
  useDocumentTitle('Home');
  return (
    <>
      <HeaderOverflow />
      <div className="container">
        <SidebarOverflow />
        <ContentOverflow />
      </div>
    </>
  );
};

export default Home;
