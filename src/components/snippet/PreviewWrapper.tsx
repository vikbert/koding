import React from 'react';
import type {Snippet} from '../../types/Snippet';
import {useSelector} from 'react-redux';
import SnippetPreview from './SnippetPreview';

type PropsType = {
  snippetId: string;
};

export default function PreviewWrapper(props: PropsType) {
  const snippetState = useSelector((state: any) => state.reduxSnippet);

  const badSnippet = snippetState.find(
    (snippet: Snippet) => snippet.id === props.snippetId,
  );

  if (!badSnippet) {
    return null;
  }

  const goodSnippet = snippetState.find(
    (element: Snippet) => element.id === badSnippet.suggestion,
  );

  // @ts-ignore
  return (
    <>
      <SnippetPreview snippet={badSnippet} autoHeight={true} />
      <SnippetPreview snippet={goodSnippet} autoHeight={true} />
    </>
  );
}
