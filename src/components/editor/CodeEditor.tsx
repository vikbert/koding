import React from 'react';
import BaseEditor from "./BaseEditor";
import "./codeEditor.css";

export default function CodeEditor(props: any) {
  return (
      <div className="editor-wrapper">
        <BaseEditor code={props.code} />
        {props.children}
      </div>
  );
}
