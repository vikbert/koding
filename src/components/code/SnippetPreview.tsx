import React from 'react';
import EditorPreview from '../editor/preview/EditorPreview';
import type {Snippet} from '../../types/Snippet';
import {useSelector} from 'react-redux';
import Thumb from '../editor/preview/Thumb';

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

  // @ts-ignore
  return (
    targetSnippet && (
      <>
        <EditorPreview code={targetSnippet.body} disabled={true}>
          <div className="editor-options">
            <Thumb bad={true} />
          </div>
        </EditorPreview>

        <EditorPreview code={goodSnippet.body} disabled={true}>
          <div className="editor-options">
            <Thumb bad={false} />
          </div>
        </EditorPreview>
      </>
    )
  );
}
