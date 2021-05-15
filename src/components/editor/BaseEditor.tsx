import {highlight, languages} from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import "prismjs/themes/prism.css"
import React from 'react';
import Editor from 'react-simple-code-editor';

type BaseEditorProps = {
  code: string;
  placeholder: string;
  disabled?: boolean;
};

export default function BaseEditor(props: BaseEditorProps) {
  return (
    <Editor
      textareaClassName="code-editor"
      disabled={props.disabled || false}
      value={props.code}
      placeholder={props.placeholder || 'Enter your new snippet'}
      onValueChange={() => null}
      highlight={(codeString) => highlight(codeString, languages.js)}
      padding={0}
      style={{
        fontFamily: 'ui-monospace,"Cascadia Mono","Segoe UI Mono","Ubuntu Mono","Roboto Mono",Menlo,Monaco,Consolas,monospace',
        fontSize: '13px',
        minHeight: '100px',
        borderRadius: '4px',
        color: '#4c4b4b',
      }}
    />
  );
}
