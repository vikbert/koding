import React from 'react';
import Bubble from '../../bubble/Bubble';
import SnippetPreview from '../../snippet/SnippetPreview';

type PropsT = {
  rule: string;
  ruleDescription?: string;
  badSnippet: string;
  goodSnippet: string;
};

export default function FormPreview(props: PropsT): JSX.Element {
  const {rule, badSnippet, goodSnippet, ruleDescription = ''} = props;

  return (
    <>
      <div className="post-layout">
        <div className="postcell post-layout--right">
          <Bubble title={rule} description={ruleDescription} />
          <SnippetPreview snippet={{id: '', body: badSnippet, isBad: true}} />
          <SnippetPreview snippet={{id: '', body: goodSnippet, isBad: false}} />

          <div className="mt24 mb12">{/*<TagList />*/}</div>
        </div>
      </div>
    </>
  );
}
