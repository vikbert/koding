import React from 'react';
import Layout from '../Layout';
import NoContent from '../../components/error/NoContent';
import AsideReadingTips from '../../components/aside/AsideReadingTips';

type PropsT = {
  name?: string;
};

export default function PageUsers(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <Layout>
        <div id="content" className="snippet-hidden">
          <div id="mainbar">
            <div className="grid">
              <h1 className={'grid-cell fl1'}>Users</h1>
            </div>
            <div className="grid">
              <div className="grid--cell12 text-centered">
                <NoContent />
              </div>
            </div>
          </div>
          <div id="sidebar">
            <AsideReadingTips />
          </div>
        </div>
      </Layout>
    </>
  );
}
