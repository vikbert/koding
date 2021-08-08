import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <>
      <footer id="footer" className="site-footer js-footer" role="contentinfo">
        <div className="site-footer--container">
          <nav className="site-footer--nav">
            <div
              className="site-footer--col site-footer--col__visible fs-fine"
              data-name="default"
            >
              <a
                href="https://koding.vercel.app"
                title="koding"
                style={{color: '#f57b10', fontSize: '4rem'}}
              >
                <span
                  className="iconify"
                  data-icon="fa-solid:share-alt"
                  data-inline="false"
                />
              </a>
            </div>
            <div
              className="site-footer--col site-footer--col__visible fs-fine"
              data-name="default"
            >
              <h5 className="-title">Technologies</h5>
              <div
                style={{
                  fontSize: '40px',
                  display: 'flex',
                  justifyContent: 'space-start',
                  gap: '30px',
                }}
              >
                <span
                  className="iconify"
                  data-icon="vscode-icons:file-type-reacttemplate"
                  data-inline="false"
                  title="react"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:redux"
                  data-inline="false"
                  title="redux"
                ></span>
                <span
                  className="iconify"
                  data-icon="vscode-icons:file-type-firebase"
                  data-inline="false"
                  title="firebase"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:prismic-icon"
                  data-inline="false"
                  title="prismic"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:react-router"
                  data-inline="false"
                  title="react-router"
                ></span>
                <span
                  className="iconify"
                  data-icon="vscode-icons:file-type-light-prettier"
                  data-inline="false"
                  title="prettier"
                ></span>
              </div>
            </div>
            <div className="site-footer--copyright fs-fine">
              <h5 className="-title">Web Design</h5>
              <p>
                This design clones the ideas from{' '}
                <a href="https://stackoverflow.com/">
                  <strong className="fc-orange-500">StackOverflow</strong>
                </a>{' '}
                and is built for coding-training and self-study. It is built
                only for desktop.
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}
