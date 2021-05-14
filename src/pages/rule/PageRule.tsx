import React from 'react';
import Layout from '../Layout';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ActionLink from '../../components/link/ActionLink';
import './pageRule.css';
import UserSignature from '../../components/user/UserSignature';
import RuleVoting from '../../components/voting/RuleVoting';
import TagList from '../../components/tag/TagList';
import ActionContainer from '../../components/link/ActionContainer';
import SnippetPreview from '../../components/code/SnippetPreview';
import Bubble from '../../components/bubble/Bubble';

export default function PageRule(): JSX.Element {
  const {id} = useParams<{id?: string}>();
  const reduxRule = useSelector((state: any) => state.reduxRule);
  const targetRule = reduxRule.targetRule;

  return (
    <>
      <Layout>
        <div id="content" className="snippet-hidden">
          <div id="mainbar">
            <div className="question" id="question">
              <div className="post-layout">
                <div className="votecell post-layout--left">
                  <RuleVoting />
                </div>
                <div className="postcell post-layout--right">
                  <Bubble message={reduxRule.targetRule.body} />

                  {targetRule.snippets.map((id: string) => (
                    <SnippetPreview snippetId={id} />
                  ))}
                  <div className="mt24 mb12">
                    <TagList />
                  </div>
                  <div className="mb0">
                    <div className="mt16 grid gs8 gsy fw-wrap jc-end ai-start pt4 mb16">
                      <ActionContainer>
                        <ActionLink path={'/rule'} name={'Edit'} />
                        <ActionLink path={'/rule'} name={'Edit'} />
                      </ActionContainer>
                      <UserSignature isOwner={false} />
                      <UserSignature isOwner={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
