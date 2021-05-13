import React from 'react';
import OverflowHeader from './OverflowHeader';
import OverflowSidebar from './OverflowSidebar';

type PropsT = {
  children: any;
};

export default function Layout(props: PropsT): JSX.Element {
  return (
    <>
      <OverflowHeader />
      <div className="container">
        <OverflowSidebar />
        {props.children}
      </div>
    </>
  );
}
