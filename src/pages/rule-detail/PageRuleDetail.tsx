import React from 'react';
import Layout from '../Layout';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import ActionLink from '../../components/link/ActionLink';
import UserSignature from '../../components/user/UserSignature';
import RuleVoting from '../../components/voting/RuleVoting';
import TagList from '../../components/tag/TagList';
import ActionContainer from '../../components/link/ActionContainer';
import SnippetPreview from '../../components/code/SnippetPreview';
import Bubble from '../../components/bubble/Bubble';
import LocalStorageClient from '../../services/LocalStorageClient';
import NotFound from '../../components/error/NotFound';
import {loadSnippets} from '../../components/code/snippetAction';
import {updateRule} from '../../components/Rule/ruleAction';

export default function PageRuleDetail(): JSX.Element {
  const {id} = useParams<{id?: string}>();
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
                  <div className="votecell post-layout--left">
                    <RuleVoting rule={targetRule} />
                  </div>
                  <div className="postcell post-layout--right">
                    <Bubble
                      title={targetRule.title}
                      description={targetRule.description}
                    />

                    {targetRule.snippets.map((id: string) => (
                      <SnippetPreview snippetId={id} key={id} />
                    ))}

                    <div className="mt24 mb12">
                      <TagList />
                    </div>
                    <div className="mb0">
                      <div className="mt16 grid gs8 gsy fw-wrap jc-end ai-start pt4 mb16">
                        <ActionContainer>
                          <ActionLink path={'/'} name={'✐ Edit'} />
                          <ActionLink path={'/rule'} name={'✚ snippet'} />
                        </ActionContainer>
                        <UserSignature isOwner={false} />
                        <UserSignature isOwner={true} />
                      </div>
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
