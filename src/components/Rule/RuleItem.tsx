import React from 'react';
import {Link} from 'react-router-dom';
import TagList from '../tag/TagList';
import TagLink from '../tag/TagLink';
import type {Rule} from '../../types/Rule';
import TopRuleVoting from '../voting/TopRuleVoting';

type PropsT = {
  rule: Rule;
};

export default function RuleItem(props: PropsT): JSX.Element {
  const {rule} = props;

  return (
    <>
      <div className="question-summary narrow" id="question-summary-67499960">
        <TopRuleVoting />
        <div className="summary">
          <h3>
            <Link to={`/convention/${rule.id}`} className="question-hyperlink">
              {rule.body}
            </Link>
          </h3>
          <div className="subcommunities float-left"></div>
          <TagList>
            <TagLink path={'/tags'} name={'javascript'} />
            <TagLink path={'/tags'} name={'php'} />
          </TagList>
        </div>
      </div>
    </>
  );
}