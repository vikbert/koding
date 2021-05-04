import React from 'react';
import BaseEditor from "./BaseEditor";
import "./codeEditor.css";

interface IProps {
  code: string,
  disabled?: boolean,
  children: any,
}

export default function CodeEditor(props: IProps) {
  return (
      <div className="editor-wrapper">
        <BaseEditor code={props.code} disabled={props.disabled}/>
        {props.children}
      </div>
  );
}
