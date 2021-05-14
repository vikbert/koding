import React from 'react';
import Bubble from '../../components/bubble/Bubble';
import CodePreview from '../../components/code/CodePreview';

type PropsT = {
  rule: string;
  badSnippet: string;
  goodSnippet: string;
};

export default function FormPreview(props: PropsT): JSX.Element {
  const {rule, badSnippet, goodSnippet} = props;

  return (
    <>
      <div className="post-layout">
        <div className="postcell post-layout--right">
          <Bubble message={rule} />
          <CodePreview code={badSnippet} isBad={true} />
          <CodePreview code={goodSnippet} isBad={false} />

          <div className="mt24 mb12">{/*<TagList />*/}</div>
        </div>
      </div>
    </>
  );
}
