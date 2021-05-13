import React from 'react';
import Layout from '../Layout';

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
              <h1 className={'grid-cell fl1'}>User page</h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
