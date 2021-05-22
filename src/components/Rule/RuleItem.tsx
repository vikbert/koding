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

  function slugify(str: string) {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();

    const from =
      'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
    const to =
      'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '')
      // Collapse whitespace and replace by -
      .replace(/\s+/g, '-')
      // Collapse dashes
      .replace(/-+/g, '-');

    return str;
  }

  return (
    <>
      <div className="question-summary narrow" id="question-summary-67499960">
        <TopRuleVoting rule={rule} />
        <div className="summary">
          <h3>
            <Link
              to={`/convention/${rule.id}/${slugify(rule.title)}`}
              className="question-hyperlink"
            >
              {rule.title}
            </Link>
          </h3>
          <div className="float-left"></div>
          <TagList>
            {rule.tags.map((item: string) => (
              <TagLink path={'/tags'} name={item} />
            ))}
          </TagList>
        </div>
      </div>
    </>
  );
}
