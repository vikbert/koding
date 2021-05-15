import React from 'react';
import Thumb from './Thumb';
import BaseEditor from '../editor/BaseEditor';
import './codePreview.css';
import classNames from 'classnames';

type PropsT = {
  code: string;
  isBad: boolean;
  autoHeight?: boolean;
};

export default function CodePreview(props: PropsT): JSX.Element {
  const {code, isBad, autoHeight = false} = props;
  const [fullView, setFullView] = React.useState(autoHeight);

  function toggleFullView() {
    setFullView((prev) => {
      return !prev;
    });
  }

  return (
    <div
      className={classNames('editor-wrapper', {'list-item': !fullView})}
      onClick={toggleFullView}
    >
      <BaseEditor code={code} disabled={false} placeholder={''} />
      <div className="editor-options">
        <Thumb bad={isBad} />
      </div>
    </div>
  );
}
