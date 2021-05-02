import {highlight, languages} from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import React, {useState} from 'react'
import Editor from "react-simple-code-editor";
import "./codeEditor.css";

export default function CodeEditor(props: any) {
    const [value, setValue] = useState(props.code);

    return (
        <div className="editor-wrapper">
            <div className="editor-label">{props.language}</div>
            <Editor
                value={value}
                onValueChange={(codeString) => setValue(codeString)}
                highlight={(codeString) => highlight(codeString, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    minHeight: '200px',
                    maxHeight: '700px',
                    overflow: 'scroll',
                    color: 'rgb(169 208 247)',
                }}
            />
        </div>
    );
}
