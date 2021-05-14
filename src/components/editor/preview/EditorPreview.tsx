import React from 'react';
import './editorPreview.css';
import EditorHeader from './EditorHeader';
import BaseEditor from '../BaseEditor';

type ReadOnlyEditorProps = {
  code: string;
  disabled?: boolean;
  children?: any;
};

export default function EditorPreview(props: ReadOnlyEditorProps) {
  return (
    <div className="editor-wrapper">
      <EditorHeader />
      <BaseEditor code={props.code} disabled={true} placeholder={''} />
      {props.children}
    </div>
  );
}
