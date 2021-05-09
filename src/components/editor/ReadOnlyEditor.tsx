import React from 'react';
import "./editor.css";
import EditorHeader from "./EditorHeader";
import BaseEditor from "./BaseEditor";

type ReadOnlyEditorProps = {
  code: string,
  disabled?: boolean,
  children: any,
}

export default function ReadOnlyEditor(props: ReadOnlyEditorProps) {
  return (
      <div className="editor-wrapper">
        <EditorHeader/>
        <BaseEditor code={props.code} disabled={true} placeholder={''}/>
        {props.children}
      </div>
  );
}
