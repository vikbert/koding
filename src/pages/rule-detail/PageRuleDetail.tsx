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
              {undefined === targetRule ? (
                <NotFound />
              ) : (
                <div className="post-layout">
                  <div className={classNames('overlay', {open: visible})}>
                    <div className="popup">
                      <div className="content">
                        <FormUpdate
                          rule={targetRule}
                          closePopup={() => hide()}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="votecell post-layout--left">
                    <RuleVoting rule={targetRule} />
                  </div>
                  <div className="postcell post-layout--right">
                    <div className="mt16 grid gs8 gsy fw-wrap jc-end ai-start">
                      <a
                        className="s-btn pt0 pb0 fc-light"
                        onClick={() => show()}
                      >
                        {'✐ Edit convention'}
                      </a>
                    </div>
                    <Bubble
                      title={targetRule.title}
                      description={targetRule.description}
                    />

                    {targetRule.snippets.map((id: string) => (
                      <PreviewWrapper snippetId={id} key={id} />
                    ))}

                    <div className="mt24 mb12">
                      <TagList />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
