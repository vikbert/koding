import React from 'react';
import EditorPreview from '../editor/preview/EditorPreview';
import type {Snippet} from '../../types/Snippet';
import {useSelector} from 'react-redux';
import Thumb from '../editor/preview/Thumb';
import CodePreview from './CodePreview';

type PropsType = {
  snippetId: string;
};

export default function SnippetPreview(props: PropsType) {
  const snippetState = useSelector((state: any) => state.reduxSnippet);
  const target = snippetState.find(
    (code: Snippet) => code.id === props.snippetId,
  );
  const [targetSnippet, setTargetSnippet] = React.useState(target);
  const goodSnippet = snippetState.find(
    (element: Snippet) => element.id === target.suggestion,
  );

  if (!targetSnippet) {
    return null;
  }

  // @ts-ignore
  return (
    <>
      <CodePreview code={targetSnippet.body} isBad={true} />
      <CodePreview code={goodSnippet.body} isBad={false} />
    </>
  );
}
