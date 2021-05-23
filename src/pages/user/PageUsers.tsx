import React from 'react';
import NoContent from '../../components/error/NoContent';
import AsideReadingTips from '../../components/aside/AsideReadingTips';

type PropsT = {
  name?: string;
};

export default function PageUsers(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <div id="mainbar">
        <div className="grid">
          <h1 className={'grid-cell fl1'}>Users</h1>
        </div>
        <div className="grid">
          <div className="grid--cell12">
            <NoContent />
          </div>
        </div>
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
}
