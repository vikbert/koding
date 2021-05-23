import React from 'react';
import {Link} from 'react-router-dom';
import TagList from '../tag/TagList';
import TagLink from '../tag/TagLink';
import type {Rule} from '../../types/Rule';
import Votes from '../voting/Votes';
import {slugify} from '../../utils/String';
import {useDispatch} from "react-redux";
import {updateRule} from "./ruleWidget";

type PropsT = {
  rule: Rule;
};

export default function RuleItem(props: PropsT): JSX.Element {
  const {rule} = props;
  const dispatch = useDispatch();
  const pathDetail = `/convention/${rule.documentId}/${slugify(rule.title)}`;

  const handleIncrementViews = () => {
    dispatch(updateRule({...rule, views: ++rule.views}));
  }

  return (
    <>
      <div className="question-summary narrow" id="question-summary-67499960">
        <Votes rule={rule} incrementViews={handleIncrementViews}/>
        <div className="summary">
          <Link to={pathDetail} className="question-hyperlink" onClick={handleIncrementViews}>
            <h3>{rule.title}</h3>
          </Link>
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
