import React from 'react';
import Thumb from './Thumb';
import BaseEditor from '../editor/BaseEditor';
import './snippetPreview.css';
import classNames from 'classnames';
import {Snippet} from '../../types/Snippet';

type PropsT = {
  snippet: Snippet;
  autoHeight?: boolean;
};

export default function SnippetPreview(props: PropsT): JSX.Element {
  const {snippet, autoHeight = false} = props;
  const [fullView, setFullView] = React.useState(autoHeight);

  function toggleFullView() {
    setFullView((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <div
        className={classNames('editor-wrapper', {'list-item': !fullView})}
        onClick={toggleFullView}
      >
        <BaseEditor code={snippet.body} disabled={false} placeholder={''} />
        <div className="editor-options">
          <Thumb bad={snippet.isBad} />
        </div>
      </div>
      <div className="grid gs8 mb32">
        <a className="s-btn pt0 pb0 fc-light" onClick={() => false}>
          {'✐ Edit'}
        </a>
      </div>
    </>
  );
}
