import React from 'react';
import EditorPreview from '../editor/preview/EditorPreview';
import Thumb from '../editor/preview/Thumb';

type PropsT = {
  code: string;
  isBad: boolean;
};

export default function CodePreview(props: PropsT): JSX.Element {
  const {code, isBad} = props;

  return (
    <EditorPreview code={code}>
      <div className="editor-options">
        <Thumb bad={isBad} />
      </div>
    </EditorPreview>
  );
}
