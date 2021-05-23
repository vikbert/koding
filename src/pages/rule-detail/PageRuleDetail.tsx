import React from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import VotingRule from '../../components/voting/VotingRule';
import TagList from '../../components/tag/TagList';
import Bubble from '../../components/bubble/Bubble';
import NotFound from '../../components/error/NotFound';
import {loadSnippets} from '../../components/snippet/snippetAction';
import {
  fetchRule,
  cleanUpTargetRule,
} from '../../components/Rule/ruleWidget';
import classNames from 'classnames';
import useVisibility from '../../hooks/useVisibility';
import FormUpdate from '../../components/Rule/form/FormUpdate';
import PreviewWrapper from '../../components/snippet/PreviewWrapper';
import AsideInformation from '../../components/aside/AsideInformation';
import TagItem from '../../components/tag/TagItem';

export default function PageRuleDetail(): JSX.Element | null {
  const {documentId} = useParams<{ documentId?: string }>();
  const {visible, show, hide} = useVisibility();
  const dispatch = useDispatch();
  const targetRule = useSelector((state: any) => state.reduxRule.targetRule);
  const errorRedux = useSelector((state: any) => state.reduxError);

  if (!documentId) {
    return null;
  }

  React.useEffect(() => {
    dispatch(loadSnippets());
  }, []);

  React.useEffect(() => {
    try {
      dispatch(fetchRule(documentId));
    } catch (error) {
    }

    return function () {
      dispatch(cleanUpTargetRule());
    };
  }, [documentId]);

  React.useEffect(() => {
  	console.log('✅', targetRule);
  }, [documentId, targetRule])

  if (errorRedux.hasError || undefined === targetRule) {
    return <NotFound/>;
  }

  return (
      targetRule && (
          <>
            <div id="mainbar">
              <div className="question" id="question">
                <div id="question-header" className="grid jc-end">
                  <a href="/insert" className="ws-nowrap s-btn s-btn__filled mb16">
                    {'✚ Add another coding convention'}
                  </a>
                </div>
                <div className="post-layout rule-detail">
                  <div className="votecell post-layout--left">
                    <VotingRule/>
                  </div>
                  <div className="postcell post-layout--right">
                    {targetRule.tags.map((tag: string) => (
                        <TagItem
                            name={tag}
                            onClickCallback={() => null}
                            editable={false}
                        />
                    ))}
                    <Bubble
                        title={targetRule.title}
                        description={targetRule.description}
                    />
                    <a className="s-btn pt0 pb16 fc-light" onClick={() => show()}>
                      {'✐ Edit the convention'}
                    </a>
                    {targetRule.snippets.map((id: string) => (
                        <PreviewWrapper snippetId={id} key={id}/>
                    ))}

                    <div className="mt24 mb12">
                      <TagList/>
                    </div>
                  </div>
                  <div className={classNames('overlay', {open: visible})}>
                    <div className="popup">
                      <div className="title">Update the current convention:</div>
                      <div className="content">
                        <FormUpdate rule={targetRule} closePopup={() => hide()}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="sidebar">
              <AsideInformation title={'Toggle code preview view'}>
                <p>click on the code snippet to expand or collapse the preview.</p>
              </AsideInformation>
            </div>
          </>
      )
  );
}
