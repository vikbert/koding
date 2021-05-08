import React, {useState} from 'react';
import "./editor.css";
import EditorHeader from "./EditorHeader";

interface IProps {
  code: string,
  disabled?: boolean,
  children: any,
}

export default function CodeEditor(props: IProps) {
  const [value, setValue] = useState('');
  const handleOnChange = (event: any) => {
    setValue(event.target.value);
  }

  return (
      <div className="editor-wrapper">
        <EditorHeader/>
        <textarea
            rows={15}
            style={{fontFamily: ''}}
            value={value}
            placeholder={'enter here your snippet'}
            onChange={handleOnChange}/>
        {props.children}
      </div>
  );
}
