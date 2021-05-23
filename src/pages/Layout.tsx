import React from 'react';
import OverflowHeader from '../components/header/OverflowHeader';
import OverflowSidebar from '../components/sidebar/OverflowSidebar';
import Footer from '../components/footer/Footer';

type PropsT = {
  children: any;
};

export default function Layout(props: PropsT): JSX.Element {
  return (
    <>
      <OverflowHeader />
      <div className="container">
        <OverflowSidebar />
        <div id="content" className="snippet-hidden">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}
