import React from 'react';
import {Snippet} from '../../types/Snippet';
import {useDispatch} from 'react-redux';
import {updateSnippet} from './snippetAction';

type PropsT = {
  snippet: Snippet;
  closePopup: () => void;
};

export default function SnippetForm(props: PropsT): JSX.Element {
  const {snippet, closePopup} = props;

  const [code, setCode] = React.useState(snippet.body);
  const dispatch = useDispatch();

  function handleChangeCode(event: any) {
    setCode(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    const snippetWithPath: Snippet = {
      ...props.snippet,
      // @ts-ignore
      path: props.snippet.__meta__.path,
    }

    dispatch(
      updateSnippet({
        ...snippetWithPath,
        body: code,
      }),
    );
    closePopup();
  }

  return (
    <>
      <div className="grid--cell fl1 wmn0">
        <form onSubmit={handleSubmit}>
          <div className="mt24">
            <textarea
              className="snippet"
              name={'good'}
              placeholder={'Good snippet'}
              value={code}
              onChange={handleChangeCode}
            />
          </div>
          <div className="grid gsx gs4 mt32 float-right">
            <button
              className="grid--cell s-btn s-btn__muted"
              type="button"
              onClick={closePopup}
            >
              Cancel
            </button>
            <button
              className="grid--cell s-btn s-btn__filled"
              type="submit"
              onClick={handleSubmit}
            >
              Ok, it's done
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
