import React from 'react';
import {Link} from 'react-router-dom';
import TagList from '../tag/TagList';
import TagLink from '../tag/TagLink';
import type {Rule} from '../../types/Rule';
import Votes from '../voting/Votes';
import {slugify} from '../../utils/String';

type PropsT = {
  rule: Rule;
};

export default function RuleItem(props: PropsT): JSX.Element {
  const {rule} = props;
  const pathDetail = `/convention/${rule.documentId}/${slugify(rule.title)}`;

  return (
    <>
      <div className="question-summary narrow" id="question-summary-67499960">
        <Votes rule={rule} />
        <div className="summary">
          <h3>
            <Link to={pathDetail} className="question-hyperlink">
              {rule.title}
            </Link>
          </h3>
          <TagList>
            {rule.tags.map((item: string) => (
              <TagLink path={`/tag/${item}`} name={item} />
            ))}
          </TagList>
        </div>
      </div>
    </>
  );
}
