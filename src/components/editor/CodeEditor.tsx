import React from 'react';
import "./editor.css";
import EditorHeader from "./EditorHeader";

type CodeEditorProps = {
  fieldName: string,
  code: string,
  disabled?: boolean,
  children: any,
}

export default function CodeEditor(props: CodeEditorProps) {
  return (
      <div className="editor-wrapper">
        <EditorHeader/>
        <textarea
            name={props.fieldName}
            rows={15}
            placeholder={'enter here your snippet'}/>
        {props.children}
      </div>
  );
}
