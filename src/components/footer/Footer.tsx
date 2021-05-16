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
                href="https://koding.vercel.ap"
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
              <h5 className="-title">Koding</h5>
              <p>
                This website uses the stylesheet from{' '}
                <a href="https://stackoverflow.com/">StackOverflow</a> and was
                built in a Coding Dojo for self-training and self-study.
              </p>
            </div>
            <div className="site-footer--copyright fs-fine">
              <h5 className="-title">Web Design</h5>
              <p>
                Site Design © 2021{' '}
                <a href="https://stackexchange.com/" target={'_blank'}>
                  Stack Exchange Inc
                </a>
                ; Publicly available user contributions licensed under cc by-sa.
                Stack Overflow for Teams user contributions licensed under Teams
                user terms.
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}
