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
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:redux"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="vscode-icons:file-type-firebase"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:prismic-icon"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="logos:react-router"
                  data-inline="false"
                ></span>
                <span
                  className="iconify"
                  data-icon="vscode-icons:file-type-light-prettier"
                  data-inline="false"
                ></span>
              </div>
            </div>
            <div className="site-footer--copyright fs-fine">
              <h5 className="-title">Web Design</h5>
              <p>
                This website borrows the ideas from{' '}
                <a href="https://stackoverflow.com/">StackOverflow</a> and was
                built in a Coding Dojo for self-training and self-study.
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}
