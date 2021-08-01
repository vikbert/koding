import classNames from "classnames";
import React, {useState} from 'react';
import useSnippetResolver from '../../hooks/useSnippetResolver';
import SnippetPreview from './SnippetPreview';

type PropsType = {
  snippetId: string;
};

const CODE_BAD = 'bad-snippet';
const CODE_GOOD = 'good-snippet';

export default function PreviewWrapper({snippetId}: PropsType) {
  const {bad, good} = useSnippetResolver(snippetId);
  const [current, setCurrent] = useState(CODE_BAD);

  if (!bad || !good) {
    return null;
  }

  const showGoodSnippet = () => {
      setCurrent(CODE_GOOD);
  }

  const showBadSnippet = () => {
      setCurrent(CODE_BAD);
  }

  // @ts-ignore
  return (
    <>
      <div className="flex--item ml-auto mb12 d-flex s-btn-group js-filter-btn">
        <span
          className={classNames("flex--item s-btn s-btn__muted s-btn__outlined", {'is-selected': current === CODE_GOOD})}
          title=" good code snippet"
          data-value="good"
          onClick={showGoodSnippet}
        >
          Good
        </span>
        <span
            className={classNames("flex--item s-btn s-btn__muted s-btn__outlined", {'is-selected': current === CODE_BAD})}
          title=" bad code snippet"
          data-value="bad"
          onClick={showBadSnippet}
        >
          Bad
        </span>
      </div>
        {current === CODE_BAD && <SnippetPreview snippet={bad} autoHeight={true} /> }
        {current === CODE_GOOD && <SnippetPreview snippet={good} autoHeight={true} />}
    </>
  );
}
