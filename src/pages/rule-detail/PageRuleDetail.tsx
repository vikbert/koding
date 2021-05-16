import React from 'react';
import Layout from '../Layout';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import RuleVoting from '../../components/voting/RuleVoting';
import TagList from '../../components/tag/TagList';
import Bubble from '../../components/bubble/Bubble';
import LocalStorageClient from '../../services/LocalStorageClient';
import NotFound from '../../components/error/NotFound';
import {loadSnippets} from '../../components/snippet/snippetAction';
import {updateRule} from '../../components/Rule/ruleAction';
import classNames from 'classnames';
import useVisibility from '../../hooks/useVisibility';
import FormUpdate from '../../components/Rule/form/FormUpdate';
import PreviewWrapper from '../../components/snippet/PreviewWrapper';
import AsideInformation from '../../components/aside/AsideInformation';

export default function PageRuleDetail(): JSX.Element {
  const {id} = useParams<{id?: string}>();
  const {visible, show, hide} = useVisibility();
  const dispatch = useDispatch();
  const reduxRule = useSelector((state: any) => state.reduxRule);
  let targetRule = reduxRule.targetRule;

  if (!targetRule && id) {
    const client = new LocalStorageClient();
    targetRule = client.fetchRule(id);
  }

  React.useEffect(() => {
    dispatch(loadSnippets());
  }, []);

  React.useEffect(() => {
    dispatch(updateRule({...targetRule, views: ++targetRule.views}));
  }, []);

  return (
    <>
      <Layout>
        <div id="content" className="snippet-hidden">
          <div id="mainbar">
            <div className="question" id="question">
              <div id="question-header" className="grid jc-end">
                <a
                  href="/insert"
                  className="ws-nowrap s-btn s-btn__filled mb16"
                >
                  {'✚ Add another coding convention'}
                </a>
              </div>
              {undefined === targetRule ? (
                <NotFound />
              ) : (
                <div className="post-layout rule-detail">
                  <div className="votecell post-layout--left">
                    <RuleVoting rule={targetRule} />
                  </div>
                  <div className="postcell post-layout--right">
                    <Bubble
                      title={targetRule.title}
                      description={targetRule.description}
                    />
                    <a
                      className="s-btn pt0 pb0 fc-light"
                      onClick={() => show()}
                    >
                      {'✐ Edit the convention'}
                    </a>
                    {targetRule.snippets.map((id: string) => (
                      <PreviewWrapper snippetId={id} key={id} />
                    ))}

                    <div className="mt24 mb12">
                      <TagList />
                    </div>
                  </div>
                  <div className={classNames('overlay', {open: visible})}>
                    <div className="popup">
                      <div className="title">
                        Update the current convention:
                      </div>
                      <div className="content">
                        <FormUpdate
                          rule={targetRule}
                          closePopup={() => hide()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div id="sidebar">
            <AsideInformation title={'Toggle code preview view'}>
              <p>
                click on the code snippet to expand or collapse the preview.
              </p>
            </AsideInformation>
          </div>
        </div>
      </Layout>
    </>
  );
}
