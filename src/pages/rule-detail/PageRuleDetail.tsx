import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import VotingRule from '../../components/voting/VotingRule';
import TagList from '../../components/tag/TagList';
import Bubble from '../../components/bubble/Bubble';
import {fetchRule, cleanUpTargetRule} from '../../components/Rule/ruleWidget';
import classNames from 'classnames';
import useVisibility from '../../hooks/useVisibility';
import FormUpdate from '../../components/Rule/form/FormUpdate';
import PreviewWrapper from '../../components/snippet/PreviewWrapper';
import AsideInformation from '../../components/aside/AsideInformation';
import TagItem from '../../components/tag/TagItem';
import LoadingContent from '../../components/loading/LoadingContent';

export default function PageRuleDetail(): JSX.Element | null {
  const {documentId} = useParams<{documentId?: string}>();
  const {visible, show, hide} = useVisibility();
  const dispatch = useDispatch();
  const targetRule = useSelector((state: any) => state.reduxRule.targetRule);

  if (!documentId) {
    return null;
  }

  React.useEffect(() => {
    try {
      dispatch(fetchRule(documentId));
    } catch (error) {}

    return function () {
      dispatch(cleanUpTargetRule());
    };
  }, [documentId]);

  return (
    <>
      <div id="mainbar">
        {!targetRule ? (
          <LoadingContent />
        ) : (
          <div className="question" id="question">
            <div id="question-header" className="grid jc-end">
              <Link to="/insert" className="ws-nowrap s-btn s-btn__filled mb16">
                {'✚ Add another coding convention'}
              </Link>
            </div>
            <div className="post-layout rule-detail">
              <div className="votecell post-layout--left">
                <VotingRule />
              </div>
              <div className="postcell post-layout--right">
                {targetRule.tags.map((tagName: string) => (
                  <Link to={`/tag/${tagName}`} key={tagName}>
                    <TagItem
                      name={tagName}
                      onClickCallback={() => null}
                      editable={false}
                    />
                  </Link>
                ))}
                <Bubble
                  title={targetRule.title}
                  description={targetRule.description}
                />
                <a className="s-btn pt6 pb6 fc-light" onClick={() => show()}>
                  {'✐ Edit the convention'}
                </a>
                {targetRule.snippets.map((snippetId: string) => (
                  <PreviewWrapper snippetId={snippetId} key={snippetId} />
                ))}

                <div className="mt24 mb12">
                  <TagList />
                </div>
              </div>
              <div className={classNames('overlay', {open: visible})}>
                <div className="popup">
                  <div className="title">Update the current convention:</div>
                  <div className="content">
                    <FormUpdate rule={targetRule} closePopup={() => hide()} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div id="sidebar">
        <AsideInformation title={'Toggle code preview view'}>
          <p>click on the code snippet to expand or collapse the preview.</p>
        </AsideInformation>
      </div>
    </>
  );
}
