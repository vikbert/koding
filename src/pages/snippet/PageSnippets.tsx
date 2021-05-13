import React from 'react';
import Layout from '../Layout';
import IconConstruction from "../../components/base/icons/IconConstruction";

type PropsT = {
  name?: string;
};

export default function PageSnippets(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <Layout>
        <div id="content" className="snippet-hidden">
          <div id="mainbar">
            <div className="grid">
              <h1 className={'grid-cell fl1'}>snippet page</h1>
            </div>
            <div className="grid">
              <div className="grid--cell12 text-centered">
                <IconConstruction size={8} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
