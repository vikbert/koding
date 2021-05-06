import React, {useState} from 'react';
import './textArea.css'
import classNames from "classnames";

const TextArea = () => {
  const [open, setOpen] = useState(false)
  const handleToggleTextArea = () => {
    setOpen(!open)
  }
  return (
      <div className={classNames('annotag', {'open': open})} onClick={handleToggleTextArea}>
        <textarea>Example annotation. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eum ut officia ipsa labore similique fugit quae harum!</textarea>
      </div>
  );
};

export default TextArea;
