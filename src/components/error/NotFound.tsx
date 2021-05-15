import React from 'react';
import Layout from '../../pages/Layout';

export default function NotFound(): JSX.Element {
  return (
    <>
      <Layout>
        <div id="content" className="snippet-hidden">
          <div id="mainbar">
            <div className="grid">
              <h1 className={'grid-cell fl1'}>Page Not Found</h1>
            </div>
            <div className="grid ai-center jc-center gs32 md:fd-column">
              <div className="grid--cell sm:d-none">
                <img
                  className="wmx100"
                  src="https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"
                  alt="Page not found"
                />
              </div>
              <div className="grid--cell wmx5">
                <h1 className="fs-headline1 mb4">Ops</h1>
                <p>There is something wrong!</p>
                <a href={'/'} className="s-btn s-btn__filled">
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
