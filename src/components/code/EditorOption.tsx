import React from 'react';
import Thumb from '../editor/Thumb';

type PropsT = {
  isBad: boolean;
  lang?: string;
};

export default function EditorOption(props: PropsT): JSX.Element {
  const {isBad} = props;

  return (
    <>
      <div className="editor-options">
        <span className="option-lang">{props.lang || 'php'}</span>
        <Thumb bad={isBad} />
        <span></span>
      </div>
    </>
  );
}
