import React from 'react';

type PropsT = {
  name?: string;
};

export default function TopRuleVoting(props: PropsT): JSX.Element {
  const {name} = props;

  return (
    <div className="cp">
      <div className="votes">
        <div className="mini-counts">
          <span title="0 votes">0</span>
        </div>
        <div>votes</div>
      </div>
      <div className="status answered">
        <div className="mini-counts">
          <span title="2 answers">2</span>
        </div>
        <div>snippets</div>
      </div>
      <div className="views">
        <div className="mini-counts">
          <span title="41 views">41</span>
        </div>
        <div>views</div>
      </div>
    </div>
  );
}
