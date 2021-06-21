import React from 'react';
import {Link} from 'react-router-dom';
import VotingRule from '../voting/VotingRule';
import TagItem from '../tag/TagItem';
import Bubble from '../bubble/Bubble';
import PreviewWrapper from '../snippet/PreviewWrapper';
import TagList from '../tag/TagList';
import classNames from 'classnames';
import RuleUpdateForm from './form/RuleUpdateForm';
import {Rule} from '../../types/Rule';
import useVisibility from '../../hooks/useVisibility';
import {useDispatch} from 'react-redux';
import {switchFormWithSnippets} from './ruleWidget';

type PropsT = {
  targetRule: Rule;
};

export default function RuleDetail({targetRule}: PropsT): JSX.Element {
  const {visible, show, hide} = useVisibility();
  const dispatch = useDispatch();

  const editConventionDescriptionAndTags = () => {
    dispatch(switchFormWithSnippets(false));
    show();
  };

  const insertSnippetsToConvention = () => {
    dispatch(switchFormWithSnippets(true));
    show();
  };

  return (
    <>
      <div className="question" id="question">
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

            <a
              className="s-btn pt6 pb6 fc-light"
              onClick={editConventionDescriptionAndTags}
            >
              {'✐ Edit the convention'}
            </a>
            <a
              className="s-btn pt6 pb6 fc-light"
              onClick={insertSnippetsToConvention}
            >
              {'✚ new snippets to the convention'}
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
                <RuleUpdateForm rule={targetRule} closePopup={() => hide()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
