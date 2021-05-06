import {highlight, languages} from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Editor from "react-simple-code-editor";
import "./codeEditor.css";
import {codeChanged} from "./editorAction";
import EditorHeader from "./EditorHeader";

interface IProps {
  code: string,
  disabled?: boolean,
}
export default function BaseEditor(props: any) {
  const [value, setValue] = useState(props.code);
  const dispatch = useDispatch();

  const handleOnChange = (codeString: string) => {
    setValue(codeString);
    dispatch(codeChanged(codeString))
  }

  return (
      <>
        <Editor
            disabled={props.disabled || false}
            value={value}
            placeholder={props.placeholder || 'Enter your new snippet'}
            onValueChange={(codeString) => handleOnChange(codeString)}
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
