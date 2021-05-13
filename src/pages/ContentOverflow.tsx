import React from 'react';

type PropsT = {
  name?: string
};

export default function ContentOverflow(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <>

      <div id="content" className="snippet-hidden">
        <div id="mainbar">
          <div className="grid">
            <h1 className="grid--cell fl1 fs-headline1">
              Top Questions
            </h1>
            <div className="ml12 aside-cta grid--cell print:d-none">
              <a href="/questions/ask" className="ws-nowrap s-btn s-btn__primary">
                Ask Question
              </a>
            </div>
          </div>
          <div id="qlist-wrapper" className="flush-left">
            <div id="question-mini-list">
              <div>
                <div className="question-summary narrow" id="question-summary-67499960">
                  <div className="cp">
                    <div className="votes">
                      <div className="mini-counts"><span title="0 votes">0</span></div>
                      <div>votes</div>
                    </div>
                    <div className="status answered">
                      <div className="mini-counts"><span title="2 answers">2</span></div>
                      <div>answers</div>
                    </div>
                    <div className="views">
                      <div className="mini-counts"><span title="41 views">41</span></div>
                      <div>views</div>
                    </div>
                  </div>
                  <div className="summary">
                    <h3><a href="/questions/67499960/i-have-to-output-my-data-from-database-and-also-copy-all-inputs-from-form-to-sen" className="question-hyperlink">I have to output my data from DataBase and also copy all inputs from form
                      to send them to myself, including real-time multiplying weight*pcs</a></h3>
                    <div className="subcommunities float-left">
                    </div>
                    <div className="tags t-javascript t-php t-html">
                      <a href="/questions/tagged/javascript" className="post-tag" rel="tag">javascript</a> <a href="/questions/tagged/php" className="post-tag" rel="tag">php</a> <a href="/questions/tagged/html"
                                                                                                                                                                                     className="post-tag" rel="tag">html</a>
                    </div>
                    <div className="started">
                      <a href="/questions/67499960/i-have-to-output-my-data-from-database-and-also-copy-all-inputs-from-form-to-sen/?lastactivity" className="started-link">
                        answered <span title="2021-05-13 07:41:16Z" className="relativetime">16 mins ago</span> </a>
                      <a href="/users/15904743/szymon-%c5%bburaw">Szymon Żuraw</a> <span className="reputation-score" title="reputation score " dir="ltr">1</span>
                    </div>
                  </div>
                </div>
                <div className="question-summary narrow" id="question-summary-67515241">
                  <div className="cp">
                    <div className="votes">
                      <div className="mini-counts"><span title="0 votes">0</span></div>
                      <div>votes</div>
                    </div>
                    <div className="status answered">
                      <div className="mini-counts"><span title="1 answer">1</span></div>
                      <div>answer</div>
                    </div>
                    <div className="views">
                      <div className="mini-counts"><span title="8 views">8</span></div>
                      <div>views</div>
                    </div>
                  </div>
                  <div className="summary">
                    <h3><a href="/questions/67515241/javascript-difference-dates-with-120s" className="question-hyperlink">Javascript - Difference dates with 120s</a></h3>
                    <div className="subcommunities float-left">
                    </div>
                    <div className="tags t-momentjs">
                      <a href="/questions/tagged/momentjs" className="post-tag" rel="tag">momentjs</a>
                    </div>
                    <div className="started">
                      <a href="/questions/67515241/javascript-difference-dates-with-120s/?lastactivity" className="started-link">
                        answered <span title="2021-05-13 07:41:12Z" className="relativetime">16 mins ago</span> </a>
                      <a href="/users/7823152/althelazymonkey">AlTheLazyMonkey</a> <span className="reputation-score" title="reputation score " dir="ltr">542</span>
                    </div>
                  </div>
                </div>
                <div className="question-summary narrow tagged-interesting" id="question-summary-67515324">
                  <div className="cp">
                    <div className="votes">
                      <div className="mini-counts"><span title="1 vote">1</span></div>
                      <div>vote</div>
                    </div>
                    <div className="status unanswered">
                      <div className="mini-counts"><span title="0 answers">0</span></div>
                      <div>answers</div>
                    </div>
                    <div className="views">
                      <div className="mini-counts"><span title="20 views">20</span></div>
                      <div>views</div>
                    </div>
                  </div>
                  <div className="summary">
                    <h3><a href="/questions/67515324/what-is-type-of-toisostring" className="question-hyperlink">what is type of toISOString</a></h3>
                    <div className="subcommunities float-left">
                    </div>
                    <div className="tags t-javascript t-reactjs t-typescript">
                      <a href="/questions/tagged/javascript" className="post-tag" rel="tag">javascript</a> <a href="/questions/tagged/reactjs" className="post-tag" rel="tag">reactjs</a> <a href="/questions/tagged/typescript"
                                                                                                                                                                                             className="post-tag"
                                                                                                                                                                                             rel="tag">typescript</a>
                    </div>
                    <div className="started">
                      <a href="/questions/67515324/what-is-type-of-toisostring" className="started-link">
                        modified <span title="2021-05-13 07:40:04Z" className="relativetime">17 mins ago</span> </a>
                      <a href="/users/209259/erik-philips">Erik Philips</a> <span className="reputation-score" title="reputation score 48,468" dir="ltr">48.5k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br className="cbt"/>
        </div>
        <div id="sidebar">
          <div className="s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16" data-tracker="cb=1">
            <ul className="d-block p0 m0">
              <div className="s-sidebarwidget--header s-sidebarwidget__small-bold-text fc-light d:fc-black-900 bb bbw1">
                The Overflow Blog
              </div>
              <li className="s-sidebarwidget--item grid px16">
                <div className="grid--cell1 fl-shrink0">
                  <svg aria-hidden="true" className="va-text-top svg-icon iconPencilSm" width={14} height={14} viewBox="0 0 14 14">
                    <path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/>
                  </svg>
                </div>
                <div className="grid--cell wmn0 ow-break-word">
                  <a href="https://stackoverflow.blog/2021/05/11/building-a-space-based-isp/?cb=1" className="js-gps-track"
                     data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2021/05/11/building-a-space-based-isp/&quot;,null,null]"
                     data-gps-track="communitybulletin.click({ priority: 1, position: 0 })">Network protocols in orbit: Building a space-based ISP</a>
                </div>
              </li>
              <li className="s-sidebarwidget--item grid px16">
                <div className="grid--cell1 fl-shrink0">
                  <svg aria-hidden="true" className="va-text-top svg-icon iconPencilSm" width={14} height={14} viewBox="0 0 14 14">
                    <path d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/>
                  </svg>
                </div>
                <div className="grid--cell wmn0 ow-break-word">
                  <a href="https://stackoverflow.blog/2021/05/11/testing-software-so-its-reliable-enough-for-space/?cb=1" className="js-gps-track"
                     data-ga="[&quot;community bulletin board&quot;,&quot;The Overflow Blog&quot;,&quot;https://stackoverflow.blog/2021/05/11/testing-software-so-its-reliable-enough-for-space/&quot;,null,null]"
                     data-gps-track="communitybulletin.click({ priority: 1, position: 1 })">Testing software so it’s reliable enough for space</a>
                </div>
              </li>
              <div className="s-sidebarwidget--header s-sidebarwidget__small-bold-text fc-light d:fc-black-900 bb bbw1">
                Featured on Meta
              </div>
              <li className="s-sidebarwidget--item grid px16">
                <div className="grid--cell1 fl-shrink0">
                  <div className="favicon favicon-stackexchangemeta" title="Meta Stack Exchange"/>
                </div>
                <div className="grid--cell wmn0 ow-break-word">
                  <a href="https://meta.stackexchange.com/questions/364007/testing-three-vote-close-and-reopen-on-13-network-sites?cb=1" className="js-gps-track"
                     data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/364007/testing-three-vote-close-and-reopen-on-13-network-sites&quot;,null,null]"
                     data-gps-track="communitybulletin.click({ priority: 3, position: 2 })">Testing three-vote close and reopen on 13 network sites</a>
                </div>
              </li>
              <li className="s-sidebarwidget--item grid px16">
                <div className="grid--cell1 fl-shrink0">
                  <div className="favicon favicon-stackexchangemeta" title="Meta Stack Exchange"/>
                </div>
                <div className="grid--cell wmn0 ow-break-word">
                  <a href="https://meta.stackexchange.com/questions/364048/we-are-switching-to-system-fonts-on-may-10-2021?cb=1" className="js-gps-track"
                     data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackexchange.com/questions/364048/we-are-switching-to-system-fonts-on-may-10-2021&quot;,null,null]"
                     data-gps-track="communitybulletin.click({ priority: 3, position: 3 })">We are switching to system fonts on May 10, 2021</a>
                </div>
              </li>
              <li className="s-sidebarwidget--item grid px16">
                <div className="grid--cell1 fl-shrink0">
                  <div className="favicon favicon-stackoverflowmeta" title="Meta Stack Overflow"/>
                </div>
                <div className="grid--cell wmn0 ow-break-word">
                  <a href="https://meta.stackoverflow.com/questions/407613/outdated-answers-flagging-exercise-begins-today?cb=1" className="js-gps-track"
                     data-ga="[&quot;community bulletin board&quot;,&quot;Featured on Meta&quot;,&quot;https://meta.stackoverflow.com/questions/407613/outdated-answers-flagging-exercise-begins-today&quot;,null,null]"
                     data-gps-track="communitybulletin.click({ priority: 6, position: 4 })">Outdated Answers: flagging exercise begins today</a>
                </div>
              </li>
              <div className="s-sidebarwidget--header s-sidebarwidget__small-bold-text fc-light d:fc-black-900 bb bbw1">
                Hot Meta Posts
              </div>
              <li className="s-sidebarwidget--item grid px16">
                <div className="grid--cell1 fl-shrink0">
                  <span className="fc-black-500" title="Vote score (upvotes - downvotes)">10</span>
                </div>
                <div className="grid--cell wmn0 ow-break-word">
                  <a href="https://meta.stackoverflow.com/questions/407563/triage-no-minimal-example-given?cb=1" className="js-gps-track"
                     data-ga="[&quot;community bulletin board&quot;,&quot;Hot Meta Posts&quot;,&quot;https://meta.stackoverflow.com/questions/407563/triage-no-minimal-example-given&quot;,null,null]"
                     data-gps-track="communitybulletin.click({ priority: 7, position: 5 })">Triage - no minimal example given</a>
                </div>
              </li>
              <li className="s-sidebarwidget--item grid px16">
                <div className="grid--cell1 fl-shrink0">
                  <span className="fc-black-500" title="Vote score (upvotes - downvotes)">19</span>
                </div>
                <div className="grid--cell wmn0 ow-break-word">
                  <a href="https://meta.stackoverflow.com/questions/407578/request-for-moderation-new-user-asked-and-deleted-own-questions-including-good?cb=1" className="js-gps-track"
                     title="Request for moderation: New user asked and deleted own questions including good answers"
                     data-ga="[&quot;community bulletin board&quot;,&quot;Hot Meta Posts&quot;,&quot;https://meta.stackoverflow.com/questions/407578/request-for-moderation-new-user-asked-and-deleted-own-questions-including-good&quot;,null,null]"
                     data-gps-track="communitybulletin.click({ priority: 7, position: 6 })">Request for moderation: New user asked and deleted own questions including…</a>
                </div>
              </li>
              <li className="s-sidebarwidget--item grid px16">
                <div className="grid--cell1 fl-shrink0">
                  <span className="fc-black-500" title="Vote score (upvotes - downvotes)">34</span>
                </div>
                <div className="grid--cell wmn0 ow-break-word">
                  <a href="https://meta.stackoverflow.com/questions/407612/you-are-the-weakest-link-goodbye?cb=1" className="js-gps-track"
                     data-ga="[&quot;community bulletin board&quot;,&quot;Hot Meta Posts&quot;,&quot;https://meta.stackoverflow.com/questions/407612/you-are-the-weakest-link-goodbye&quot;,null,null]"
                     data-gps-track="communitybulletin.click({ priority: 7, position: 7 })">You are the [weak]est link - goodbye!</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

