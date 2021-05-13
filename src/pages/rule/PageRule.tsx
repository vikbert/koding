import React from 'react';
import Layout from '../Layout';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import TagLink from '../../components/link/TagLink';
import ActionLink from '../../components/link/ActionLink';

export default function PageRule(): JSX.Element {
  const {id} = useParams<{id?: string}>();
  const reduxRule = useSelector((state: any) => state.reduxRule);
  console.log('#####', reduxRule.targetRule);

  return (
    reduxRule &&
    reduxRule.targetRule && (
      <>
        <Layout>
          <div id="content" className="snippet-hidden">
            <div id="mainbar">
              <div className="question" id="question">
                <div className="post-layout">
                  <div className="votecell post-layout--left">
                    <div className="js-voting-container grid jc-center fd-column ai-stretch gs4 fc-black-200">
                      <button
                        className="js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer"
                        data-controller="s-tooltip"
                        data-s-tooltip-placement="right"
                        aria-pressed="false"
                        aria-label="Up vote"
                        data-selected-classes="fc-theme-primary"
                        aria-describedby="--stacks-s-tooltip-6pb3mn1h"
                      >
                        <svg
                          aria-hidden="true"
                          className="m0 svg-icon iconArrowUpLg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                        >
                          <path d="M2 26h32L18 10 2 26z" />
                        </svg>
                      </button>
                      <div
                        id="--stacks-s-tooltip-6pb3mn1h"
                        className="s-popover s-popover__tooltip pe-none"
                        aria-hidden="true"
                        role="tooltip"
                      >
                        {reduxRule.targetRule.body}
                        <div className="s-popover--arrow" />
                      </div>
                      <div
                        className="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center"
                        itemProp="upvoteCount"
                        data-value={0}
                      >
                        0
                      </div>
                      <button
                        className="js-vote-down-btn grid--cell s-btn s-btn__unset c-pointer"
                        data-controller="s-tooltip"
                        data-s-tooltip-placement="right"
                        aria-pressed="false"
                        aria-label="Down vote"
                        data-selected-classes="fc-theme-primary"
                        aria-describedby="--stacks-s-tooltip-14gmr2h5"
                      >
                        <svg
                          aria-hidden="true"
                          className="m0 svg-icon iconArrowDownLg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                        >
                          <path d="M2 10h32L18 26 2 10z" />
                        </svg>
                      </button>
                      <div
                        id="--stacks-s-tooltip-14gmr2h5"
                        className="s-popover s-popover__tooltip pe-none"
                        aria-hidden="true"
                        role="tooltip"
                      >
                        This question does not show any research effort; it is
                        unclear or not useful
                        <div className="s-popover--arrow" />
                      </div>
                      <button
                        className="js-bookmark-btn s-btn s-btn__unset c-pointer py4 js-gps-track"
                        data-controller="s-tooltip"
                        data-s-tooltip-placement="right"
                        aria-pressed="false"
                        aria-label="Bookmark"
                        data-selected-classes="fc-yellow-600"
                        data-gps-track="post.click({ item: 1, priv: 27, post_type: 1 })"
                        aria-describedby="--stacks-s-tooltip-3dx4g9hy"
                      >
                        <svg
                          aria-hidden="true"
                          className="svg-icon iconBookmark"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                        >
                          <path d="M6 1a2 2 0 00-2 2v14l5-4 5 4V3a2 2 0 00-2-2H6zm3.9 3.83h2.9l-2.35 1.7.9 2.77L9 7.59l-2.35 1.7.9-2.76-2.35-1.7h2.9L9 2.06l.9 2.77z" />
                        </svg>
                        <div className="js-bookmark-count mt4 d-none" />
                      </button>
                      <div
                        id="--stacks-s-tooltip-3dx4g9hy"
                        className="s-popover s-popover__tooltip pe-none"
                        aria-hidden="true"
                        role="tooltip"
                      >
                        Bookmark this question.
                        <div className="s-popover--arrow" />
                      </div>
                      <a
                        className="js-post-issue grid--cell s-btn s-btn__unset c-pointer py6 mx-auto"
                        href="/posts/59026114/timeline"
                        data-shortcut="T"
                        data-ks-title="timeline"
                        data-controller="s-tooltip"
                        data-s-tooltip-placement="right"
                        aria-label="Timeline"
                        aria-describedby="--stacks-s-tooltip-j8iu75yh"
                      >
                        <svg
                          aria-hidden="true"
                          className="mln2 mr0 svg-icon iconHistory"
                          width={19}
                          height={18}
                          viewBox="0 0 19 18"
                        >
                          <path d="M3 9a8 8 0 113.73 6.77L8.2 14.3A6 6 0 105 9l3.01-.01-4 4-4-4h3L3 9zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5z" />
                        </svg>
                      </a>
                      <div
                        id="--stacks-s-tooltip-j8iu75yh"
                        className="s-popover s-popover__tooltip pe-none"
                        aria-hidden="true"
                        role="tooltip"
                      >
                        Show activity on this post.
                        <div className="s-popover--arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="postcell post-layout--right">
                    <div className="s-prose js-post-body" itemProp="text">
                      <h3>{reduxRule.targetRule.body}</h3>
                    </div>
                    <div className="mt24 mb12">
                      <div className="post-taglist grid gs4 gsy fd-column">
                        <div className="grid ps-relative">
                          <TagLink
                            path={'/tags/javascript'}
                            name={'JavaScript'}
                          />
                          <TagLink path={'/tags/php'} name={'PHP'} />
                        </div>
                      </div>
                    </div>
                    <div className="mb0 ">
                      <div className="mt16 grid gs8 gsy fw-wrap jc-end ai-start pt4 mb16">
                        <div className="grid--cell mr16 fl1 w96">
                          <div className="js-post-menu pt2">
                            <div className="grid d-flex gs8 s-anchors s-anchors__muted fw-wrap">
                              <div className="grid--cell">
                                <ActionLink path={'/rule'} name={'Edit'} />
                              </div>
                            </div>
                            <div className="js-menu-popup-container" />
                          </div>
                        </div>
                        <div className="post-signature grid--cell">
                          <div className="user-info user-hover">
                            <div className="user-action-time">
                              <a
                                href="/posts/59026114/revisions"
                                title="show all edits to this post"
                                className="js-gps-track"
                                data-gps-track="post.click({ item: 4, priv: 27, post_type: 1 })"
                              >
                                edited{' '}
                                <span
                                  title="2021-05-13 20:26:47Z"
                                  className="relativetime"
                                >
                                  1 min ago
                                </span>
                              </a>
                            </div>
                            <div className="user-gravatar32">
                              <a href="/users/2318649/barny">
                                <div className="gravatar-wrapper-32">
                                  <img
                                    src="https://i.stack.imgur.com/rW1HG.jpg?s=32&g=1"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="bar-sm"
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="user-details">
                              <a href="/users/2318649/barny">barny</a>
                              <div className="-flair">
                                <span
                                  className="reputation-score"
                                  title="reputation score "
                                  dir="ltr"
                                >
                                  5,215
                                </span>
                                <span title="4 gold badges" aria-hidden="true">
                                  <span className="badge1" />
                                  <span className="badgecount">4</span>
                                </span>
                                <span className="v-visible-sr">
                                  4 gold badges
                                </span>
                                <span
                                  title="16 silver badges"
                                  aria-hidden="true"
                                >
                                  <span className="badge2" />
                                  <span className="badgecount">16</span>
                                </span>
                                <span className="v-visible-sr">
                                  16 silver badges
                                </span>
                                <span
                                  title="21 bronze badges"
                                  aria-hidden="true"
                                >
                                  <span className="badge3" />
                                  <span className="badgecount">21</span>
                                </span>
                                <span className="v-visible-sr">
                                  21 bronze badges
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="post-signature owner grid--cell">
                          <div className="user-info ">
                            <div className="user-action-time">
                              asked{' '}
                              <span
                                title="2019-11-25 06:09:52Z"
                                className="relativetime"
                              >
                                Nov 25 '19 at 6:09
                              </span>
                            </div>
                            <div className="user-gravatar32">
                              <a href="/users/11180355/jakki">
                                <div className="gravatar-wrapper-32">
                                  <img
                                    src="https://www.gravatar.com/avatar/0c313225bbfd30018e66f369337e8cc5?s=32&d=identicon&r=PG&f=1"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="bar-sm"
                                  />
                                </div>
                              </a>
                            </div>
                            <div
                              className="user-details"
                              itemProp="author"
                              itemScope
                              itemType="http://schema.org/Person"
                            >
                              <a href="/users/11180355/jakki">Jakki</a>
                              <span className="d-none" itemProp="name">
                                Jakki
                              </span>
                              <div className="-flair">
                                <span
                                  className="reputation-score"
                                  title="reputation score "
                                  dir="ltr"
                                >
                                  47
                                </span>
                                <span title="1 silver badge" aria-hidden="true">
                                  <span className="badge2" />
                                  <span className="badgecount">1</span>
                                </span>
                                <span className="v-visible-sr">
                                  1 silver badge
                                </span>
                                <span
                                  title="6 bronze badges"
                                  aria-hidden="true"
                                >
                                  <span className="badge3" />
                                  <span className="badgecount">6</span>
                                </span>
                                <span className="v-visible-sr">
                                  6 bronze badges
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
  );
}
