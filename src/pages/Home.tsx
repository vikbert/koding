import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Logo from './logo.png';
import './header.css';
import AppStack from "../AppStack";

const Home = () => {
  useDocumentTitle('Home');
  return (
    <>
      <header className="header">
        <nav className="topbar">
          <div className="container space-between">
            <div className="logo">
              <img src={Logo} alt="Coding" />
            </div>
            <div className="input-wrapper">
              <input type="text" placeholder="search coding guideline" />
              <span className="iconify" data-icon="fluent:search-28-filled" />
            </div>
            <div className={'user'}>
              <span
                className="iconify"
                data-icon="carbon:user-avatar-filled-alt"
              />
            </div>
          </div>
        </nav>
      </header>
      <main className="main">
        <AppStack/>
      </main>
    </>
  );
};

export default Home;
