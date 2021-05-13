import React from 'react';

type PropsT = {
  name?: string
};

export default function RuleList(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>
      <div className="flush-left">
        <div className="question-summary narrow">
          <div className="cp">
            <div className="votes">
              <div className="mini-counts">
                <span title="0 votes">0</span>
              </div>
              <div>votes</div>
            </div>
            <div className="status unanswered">
              <div className="mini-counts">
                <span title="0 answers">0</span>
              </div>
              <div>answers</div>
            </div>
            <div className="views">
              <div className="mini-counts">
                <span title="4 views">4</span>
              </div>
              <div>views</div>
            </div>
          </div>
          <div className="summary">
            <h3>
              <a
                href="https://stackoverflow.com/questions/67512388/javascript-get-scrolling-value-and-convert-it-to-animate-element"
                className="question-hyperlink"
              >
                JavaScript - Get Scrolling Value and Convert it to Animate
                Element
              </a>
            </h3>
            <div className="subcommunities float-left"></div>
            <div className="tags t-javascript t-html t-jquery t-css">
              <a
                href="https://stackoverflow.com/questions/tagged/javascript"
                className="post-tag"
                title="show questions tagged &#39;javascript&#39;"
                rel="tag"
              >
                javascript
              </a>{' '}
              <a
                href="https://stackoverflow.com/questions/tagged/html"
                className="post-tag"
                title=""
                rel="tag"
              >
                html
              </a>{' '}
              <a
                href="https://stackoverflow.com/questions/tagged/jquery"
                className="post-tag"
                title="show questions tagged &#39;jquery&#39;"
                rel="tag"
              >
                jquery
              </a>{' '}
              <a
                href="https://stackoverflow.com/questions/tagged/css"
                className="post-tag"
                title="show questions tagged &#39;css&#39;"
                rel="tag"
              >
                css
              </a>
            </div>
            <div className="started">
              <a
                href="https://stackoverflow.com/questions/67512388/javascript-get-scrolling-value-and-convert-it-to-animate-element"
                className="started-link"
              >
                asked{' '}
                <span title="2021-05-13 00:02:03Z" className="relativetime">
                    1 min ago
                  </span>{' '}
              </a>
              <a href="https://stackoverflow.com/users/14559436/001">001</a>{' '}
              <span
                className="reputation-score"
                title="reputation score "
                dir="ltr"
              >
                  938
                </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

