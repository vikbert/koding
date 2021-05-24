import React from 'react';
import './snippetPreview.css';
import Thumb from './Thumb';
import BaseEditor from '../editor/BaseEditor';
import classNames from 'classnames';
import useVisibility from '../../hooks/useVisibility';
import SnippetForm from './SnippetForm';

type PreviewSnippet = {
  id: string;
  body: string;
  isBad: boolean;
};
type PropsT = {
  snippet: PreviewSnippet;
  autoHeight?: boolean;
  editable?: boolean;
};

export default function SnippetPreview(props: PropsT): JSX.Element {
  const {snippet, autoHeight = false, editable = true} = props;
  const [fullView, setFullView] = React.useState(autoHeight);
  const {visible, show, hide} = useVisibility();

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
        {editable && (
          <a className="s-btn pt0 pb0 fc-light" onClick={() => show()}>
            {'✐ Edit'}
          </a>
        )}

        <div className={classNames('overlay', {open: visible})}>
          <div className="popup">
            <div className="title">Update the current snippet:</div>
            <div className="content pt0">
              <SnippetForm snippet={snippet} closePopup={() => hide()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
