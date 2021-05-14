import {highlight, languages} from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
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
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: '13px',
        minHeight: '100px',
        // overflow: 'scroll',
        color: 'rgb(169 208 247)',
      }}
    />
  );
}
