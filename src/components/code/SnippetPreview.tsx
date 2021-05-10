import React from 'react';
import ReadOnlyEditor from "../editor/ReadOnlyEditor";
import {Snippet} from "../../types/Snippet";
import {useSelector} from "react-redux";
import Thumb from "../editor/Thumb";
import classNames from "classnames";
import IconNotification from "../base/icons/IconNotification";

type PropsType = {
  snippet: Snippet,
}
export default function SnippetPreview(props: PropsType) {
  const snippetState = useSelector((state: any) => state.reduxSnippet);
  const [targetSnippet, setTargetSnippet] = React.useState(props.snippet);
  const goodSnippet = snippetState.find((element: Snippet) => element.id === props.snippet.suggestion);

  function handleOpenSnippetRules() {
    // open a new popup with rules defined
  }
  // @ts-ignore
  return (
      <>
        <ReadOnlyEditor code={targetSnippet.body} disabled={true}>
          <div className="editor-options">
            <div onClick={() => setTargetSnippet(props.snippet)} className={classNames({'opacity-25': !targetSnippet.isBad})}>
              <Thumb bad={true}/>
            </div>
            <div onClick={() => setTargetSnippet(goodSnippet)} className={classNames({'opacity-25': targetSnippet.isBad})}>
              <Thumb bad={false}/>
            </div>
            <div onClick={handleOpenSnippetRules}>
              <IconNotification size={'32px'} opacity={'25%'}/>
            </div>
          </div>
        </ReadOnlyEditor>
      </>
  )
}
