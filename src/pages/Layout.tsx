import React from 'react';
import LayoutHeader from '../components/header/LayoutHeader';
import OverflowSidebar from '../components/sidebar/OverflowSidebar';
import Footer from '../components/footer/Footer';

type PropsT = {
  children: any;
};

export default function Layout(props: PropsT): JSX.Element {
  return (
    <>
      <LayoutHeader />
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
