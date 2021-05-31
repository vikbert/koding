import React from 'react';
import LayoutHeader from '../components/header/LayoutHeader';
import Footer from '../components/footer/Footer';
import TeamSidebar from '../components/sidebar/TeamSidebar';

type PropsT = {
  children: any;
};

export default function LayoutTeam(props: PropsT): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <div className="container">
        <TeamSidebar />
        <div id="content" className="snippet-hidden">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}
