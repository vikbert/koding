import React from 'react';
import {Rule} from '../../types/Rule';
import {Link} from 'react-router-dom';

type PropsT = {
  rule: Rule;
  incrementViews: () => void;
};

export default function Votes({rule, incrementViews}: PropsT): JSX.Element {
  return (
    <Link to={`/convention/${rule.documentId}`} onClick={incrementViews}>
      <div className="cp">
        <div className="status">
          <div className="mini-counts">
            <span title="2 answers">{rule.snippets.length || 0}</span>
          </div>
          <div>snippets</div>
        </div>
        <div className="status answered">
          <div className="mini-counts">
            <span title="0 votes">{rule.votes || 0}</span>
          </div>
          <div>votes</div>
        </div>
        <div className="status">
          <div className="mini-counts">
            <span title="41 views">{rule.views || 0}</span>
          </div>
          <div>views</div>
        </div>
      </div>
    </Link>
  );
}
