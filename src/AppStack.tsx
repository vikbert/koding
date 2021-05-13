import React from 'react';
import 'native-toast/dist/native-toast.css';
import './assets/css/app.css';
import RuleList from "./components/Rule/RuleList";

const AppStack = () => {
  return (
    <>
      <div className="container">
        <RuleList/>
        <div className="post-layout">
          <div className="votecell post-layout--left">
            <div className="js-voting-container grid jc-center fd-column ai-stretch gs4 fc-black-200" data-post-id={160536}>
              <button className="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" aria-pressed="false" aria-label="Up vote" data-selected-classes="fc-theme-primary"
                      aria-describedby="--stacks-s-tooltip-blw1y4pa">
                <svg aria-hidden="true" className="m0 svg-icon iconArrowUpLg" width={36} height={36} viewBox="0 0 36 36">
                  <path d="M2 26h32L18 10 2 26z"/>
                </svg>
              </button>
              <div id="--stacks-s-tooltip-blw1y4pa" className="s-popover s-popover__tooltip pe-none" aria-hidden="true" role="tooltip">This question shows research effort; it is useful and clear
                <div className="s-popover--arrow"/>
              </div>
              <div className="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center" itemProp="upvoteCount" data-value={1}>1</div>
              <button className="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer" data-controller="s-tooltip" data-s-tooltip-placement="right" aria-pressed="false" aria-label="Down vote" data-selected-classes="fc-theme-primary"
                      aria-describedby="--stacks-s-tooltip-bhipfegj">
                <svg aria-hidden="true" className="m0 svg-icon iconArrowDownLg" width={36} height={36} viewBox="0 0 36 36">
                  <path d="M2 10h32L18 26 2 10z"/>
                </svg>
              </button>
              <div id="--stacks-s-tooltip-bhipfegj" className="s-popover s-popover__tooltip pe-none" aria-hidden="true" role="tooltip">This question does not show any research effort; it is unclear or not useful
                <div className="s-popover--arrow"/>
              </div>
              <button className="js-bookmark-btn s-btn s-btn__unset c-pointer py4 js-gps-track" data-controller="s-tooltip" data-s-tooltip-placement="right" aria-pressed="false" aria-label="Bookmark" data-selected-classes="fc-yellow-600"
                      data-gps-track="post.click({ item: 1, priv: 0, post_type: 1 })" aria-describedby="--stacks-s-tooltip-6yyc9ku1">
                <svg aria-hidden="true" className="svg-icon iconBookmark" width={18} height={18} viewBox="0 0 18 18">
                  <path d="M6 1a2 2 0 00-2 2v14l5-4 5 4V3a2 2 0 00-2-2H6zm3.9 3.83h2.9l-2.35 1.7.9 2.77L9 7.59l-2.35 1.7.9-2.76-2.35-1.7h2.9L9 2.06l.9 2.77z"/>
                </svg>
                <div className="js-bookmark-count mt4 d-none" data-value/>
              </button>
              <div id="--stacks-s-tooltip-6yyc9ku1" className="s-popover s-popover__tooltip pe-none" aria-hidden="true" role="tooltip">Bookmark this question.
                <div className="s-popover--arrow"/>
              </div>
              <a className="js-post-issue grid--cell s-btn s-btn__unset c-pointer py6 mx-auto" href="/posts/160536/timeline" data-shortcut="T" data-ks-title="timeline" data-controller="s-tooltip" data-s-tooltip-placement="right"
                 aria-label="Timeline" aria-describedby="--stacks-s-tooltip-8ezgjxf4">
                <svg aria-hidden="true" className="mln2 mr0 svg-icon iconHistory" width={19} height={18} viewBox="0 0 19 18">
                  <path d="M3 9a8 8 0 113.73 6.77L8.2 14.3A6 6 0 105 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z"/>
                </svg>
              </a>
              <div id="--stacks-s-tooltip-8ezgjxf4" className="s-popover s-popover__tooltip pe-none" aria-hidden="true" role="tooltip">Show activity on this post.
                <div className="s-popover--arrow"/>
              </div>
            </div>
          </div>
          <div className="postcell post-layout--right">
            <div className="s-prose js-post-body" itemProp="text">
              <p>For new Q&amp;A sites, does Stack Exchange offer their framework so that other teams can create new sites or is it all in-house?</p>
            </div>
            <div className="mt24 mb12">
              <div className="post-taglist grid gs4 gsy fd-column">
                <div className="grid ps-relative">
                  <a href="/questions/tagged/discussion" className="post-tag required-tag js-gps-track" rel="tag">discussion</a> <a href="/questions/tagged/stack-exchange" className="post-tag js-gps-track"
                                                                                                                                          title="show questions tagged 'stack-exchange'" rel="tag">stack-exchange</a>
                </div>
              </div>
            </div>
            <div className="mb0 ">
              <div className="mt16 grid gs8 gsy fw-wrap jc-end ai-start pt4 mb16">
                <div className="grid--cell mr16 fl1 w96">
                  <div className="js-post-menu pt2" data-post-id={160536}>
                    <div className="grid d-flex gs8 s-anchors s-anchors__muted fw-wrap">
                      <div className="grid--cell">
                        <a href="/q/160536" rel="nofollow" itemProp="url" className="js-share-link js-gps-track" title="Short permalink to this question" data-gps-track="post.click({ item: 2, priv: 0, post_type: 1 })"
                           data-controller="se-share-sheet s-popover" data-se-share-sheet-title="Share a link to this question" data-se-share-sheet-subtitle data-se-share-sheet-post-type="question"
                           data-se-share-sheet-social="facebook twitter " data-se-share-sheet-location={1} data-se-share-sheet-license-url="https%3a%2f%2fcreativecommons.org%2flicenses%2fby-sa%2f3.0%2f"
                           data-se-share-sheet-license-name="CC BY-SA 3.0" data-s-popover-placement="bottom-start" aria-controls="se-share-sheet-0"
                           data-action=" s-popover#toggle se-share-sheet#preventNavigation s-popover:show->se-share-sheet#willShow s-popover:shown->se-share-sheet#didShow">Share</a>
                        <div className="s-popover z-dropdown s-anchors s-anchors__default" style={{width: 'unset', maxWidth: '28em'}} id="se-share-sheet-0">
                          <div className="s-popover--arrow"/>
                          <div><span className="js-title fw-bold">Share a link to this question</span> <span className="js-subtitle"/></div>
                          <div className="my8"><input type="text" className="js-input s-input wmn3 sm:wmn-initial" readOnly/></div>
                          <div className="d-flex jc-space-between ai-center mbn4">
                            <button className="js-copy-link-btn s-btn s-btn__link">Copy link</button>
                            <a href="https://creativecommons.org/licenses/by-sa/3.0/" rel="license" className="js-license s-block-link" target="_blank" title="The current license for this post: CC BY-SA 3.0">CC BY-SA 3.0</a>
                            <div className="js-social-container d-none"/>
                          </div>
                        </div>
                      </div>
                      <div className="grid--cell">
                        <a href="/posts/160536/edit" className="js-suggest-edit-post js-gps-track" data-gps-track="post.click({ item: 6, priv: 0, post_type: 1 })">Improve this question</a>
                      </div>
                      <div className="grid--cell">
                        <button type="button" id="btnFollowPost-160536" className="s-btn s-btn__link js-follow-post js-follow-question js-gps-track" data-gps-track="post.click({ item: 14, priv: 0, post_type: 1 })"
                                data-controller="s-tooltip " data-s-tooltip-placement="bottom" data-s-popover-placement="bottom" aria-describedby="--stacks-s-tooltip-uavhxonp">
                          Follow
                        </button>
                        <div id="--stacks-s-tooltip-uavhxonp" className="s-popover s-popover__tooltip pe-none" aria-hidden="true" role="tooltip">Follow this question to receive notifications
                          <div className="s-popover--arrow"/>
                        </div>
                      </div>
                    </div>
                    <div className="js-menu-popup-container"/>
                  </div>
                </div>
                <div className="post-signature grid--cell">
                  <div className="user-info user-hover">
                    <div className="user-action-time">
                      <a href="/posts/160536/revisions" title="show all edits to this post" className="js-gps-track" data-gps-track="post.click({ item: 4, priv: 0, post_type: 1 })">edited <span title="2012-12-27 21:31:25Z"
                                                                                                                                                                                                  className="relativetime">Dec 27 '12 at 21:31</span></a>
                    </div>
                    <div className="user-gravatar32">
                      <a href="/users/155160/adam-lear">
                        <div className="gravatar-wrapper-32"><img src="https://i.stack.imgur.com/8gs0B.png?s=32&g=1" alt="" width={32} height={32} className="bar-sm"/></div>
                      </a>
                    </div>
                    <div className="user-details">
                      <a href="/users/155160/adam-lear">Adam Lear</a><span className="mod-flair " title="moderator">♦</span>
                      <div className="-flair">
                        <span className="reputation-score" title="reputation score 148,510" dir="ltr">149k</span><span title="46 gold badges" aria-hidden="true"><span className="badge1"/><span className="badgecount">46</span></span><span
                        className="v-visible-sr">46 gold badges</span><span title="441 silver badges" aria-hidden="true"><span className="badge2"/><span className="badgecount">441</span></span><span className="v-visible-sr">441 silver badges</span><span
                        title="629 bronze badges" aria-hidden="true"><span className="badge3"/><span className="badgecount">629</span></span><span className="v-visible-sr">629 bronze badges</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-signature owner grid--cell">
                  <div className="user-info ">
                    <div className="user-action-time">
                      asked <span title="2012-12-27 19:42:04Z" className="relativetime">Dec 27 '12 at 19:42</span>
                    </div>
                    <div className="user-gravatar32">
                      <a href="/users/205721/rickd">
                        <div className="gravatar-wrapper-32"><img src="https://i.stack.imgur.com/MDQWA.jpg?s=32&g=1" alt="" width={32} height={32} className="bar-sm"/></div>
                      </a>
                    </div>
                    <div className="user-details" itemProp="author" itemScope itemType="http://schema.org/Person">
                      <a href="/users/205721/rickd">RickD</a><span className="d-none" itemProp="name">RickD</span>
                      <div className="-flair">
                        <span className="reputation-score" title="reputation score " dir="ltr">121</span><span title="2 bronze badges" aria-hidden="true"><span className="badge3"/><span className="badgecount">2</span></span><span
                        className="v-visible-sr">2 bronze badges</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="d-none" itemProp="commentCount">1</span>
          <div className="post-layout--right js-post-comments-component">
            <div id="comments-160536" className="comments js-comments-container bt bc-black-075 mt12 " data-post-id={160536} data-min-length={15}>
              <ul className="comments-list js-comments-list" data-remaining-comments-count={0} data-canpost="false" data-cansee="true" data-comments-unavailable="false" data-addlink-disabled="true">
                <li id="comment-465502" className="comment js-comment " data-comment-id={465502} data-comment-owner-id={161198} data-comment-score={1}>
                  <div className="js-comment-actions comment-actions">
                    <div className="comment-score js-comment-edit-hide">
                      <span title="number of 'useful comment' votes received" className="cool">1</span>
                    </div>
                  </div>
                  <div className="comment-text  js-comment-text-and-form">
                    <div className="comment-body js-comment-edit-hide">
                      <span className="comment-copy">If you're looking to host your own SO-like site, a clone might be of interest: <a href="http://meta.stackexchange.com/questions/2267/stack-overflow-clones"
                                                                                                                                       title="stack overflow clones">meta.stackexchange.com/questions/2267/stack-overflow-clones</a></span>
                      –&nbsp;<a href="/users/161198/bart" title="59,691 reputation" className="comment-user">Bart</a>
                      <span className="comment-date" dir="ltr"><a className="comment-link" href="#comment465502_160536"><span title="2012-12-27 19:56:41Z, License: CC BY-SA 3.0" className="relativetime-clean">Dec 27 '12 at 19:56</span></a></span>
                      <span title="this comment was edited 1 time">
                      <svg aria-hidden="true" className="va-text-bottom o50 svg-icon iconPencilSm" width={14} height={14} viewBox="0 0 14 14"><path
                        d="M11.1 1.71l1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0zM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88z"/></svg>
                    </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="comments-link-160536" data-rep={5} data-anon="true">
              <a className="js-add-link comments-link disabled-link" title="Use comments to ask for clarification or add more information. Avoid answering questions in comments." href="#" role="button">Add a comment</a>
              <span className="js-link-separator dno">&nbsp;|&nbsp;</span>
              <a className="js-show-link comments-link dno" title="Expand to show all comments on this post" role="button"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStack;
