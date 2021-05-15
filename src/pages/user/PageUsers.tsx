import React from 'react';
import Layout from '../Layout';
import IconConstruction from '../../components/icons/IconConstruction';
import NoContent from '../../components/error/NoContent';

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
        </div>
      </Layout>
    </>
  );
}
