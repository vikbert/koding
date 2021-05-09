import React from 'react';
import ReadOnlyEditor from "../editor/ReadOnlyEditor";
import {Snippet} from "../../types/Snippet";
import {useSelector} from "react-redux";
import Thumb from "../editor/Thumb";
import classNames from "classnames";

type PropsType = {
  snippet: Snippet,
}
export default function SnippetPreview(props: PropsType) {
  const snippetState = useSelector((state: any) => state.reduxSnippet);
  const [targetSnippet, setTargetSnippet] = React.useState(props.snippet);
  const goodSnippet = snippetState.find((element: Snippet) => element.id === props.snippet.suggestion);

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
            <div>
              <span className="iconify" data-icon="ant-design:notification-outlined" data-inline="false" style={{fontSize: '32px', opacity: '25%'}}/>
            </div>
          </div>
        </ReadOnlyEditor>
      </>
  )
}
