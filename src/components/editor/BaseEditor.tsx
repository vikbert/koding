import {highlight, languages} from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import React from 'react';
import Editor from "react-simple-code-editor";

interface IProps {
  code: string,
  placeholder: string,
  disabled?: boolean,
}

export default function BaseEditor(props: IProps) {
  return (
      <>
        <Editor
            disabled={props.disabled || false}
            value={props.code}
            placeholder={props.placeholder || 'Enter your new snippet'}
            onValueChange={() => null}
            highlight={(codeString) => highlight(codeString, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              minHeight: '200px',
              maxHeight: '700px',
              overflow: 'scroll',
              color: 'rgb(169 208 247)',
            }}
        />
      </>
  );
}
