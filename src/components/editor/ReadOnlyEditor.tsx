import React from 'react';
import "./editor.css";
import EditorHeader from "./EditorHeader";
import BaseEditor from "./BaseEditor";

interface IProps {
  code: string,
  disabled?: boolean,
  children: any,
}

export default function ReadOnlyEditor(props: IProps) {
  return (
      <div className="editor-wrapper">
        <EditorHeader/>
        <BaseEditor code={props.code} disabled={true} placeholder={''}/>
        {props.children}
      </div>
  );
}
