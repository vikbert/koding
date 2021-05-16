import React from 'react';
import type {Snippet} from '../../types/Snippet';
import {useSelector} from 'react-redux';
import SnippetPreview from './SnippetPreview';

type PropsType = {
  snippetId: string;
};

export default function PreviewWrapper(props: PropsType) {
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
      <SnippetPreview snippet={target} />
      <SnippetPreview snippet={goodSnippet} />
    </>
  );
}
