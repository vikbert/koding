import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import './prism.css'
import './editor.css'
const CodeEditor = (props: any) => {
  const [content, setContent] = useState(props.content);

  const handleKeyDown = (e: any) => {
    let value = content, selStartPos = e.currentTarget.selectionStart;

    // handle 4-space indent on
    if (e.key === "Tab") {
      value = value.substring(0, selStartPos) + "    " +
      value.substring(selStartPos, value.length);
      e.currentTarget.selectionStart = selStartPos + 3;
      e.currentTarget.selectionEnd = selStartPos + 4;
      e.preventDefault();

      setContent(value);
    }
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <div className="code-edit-container">
      <textarea
        style={{"resize": "none"} }
        className="code-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="line-numbers">

      <pre className="code-output">
        <code className={`language-${props.language}`}>{content}</code>
      </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
