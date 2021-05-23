import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadSnippets} from '../../components/snippet/snippetAction';
import ListSnippets from '../../components/snippet/ListSnippets';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import NoContent from '../../components/error/NoContent';

export default function PageSnippets(): null | JSX.Element {
  const reduxSnippet = useSelector((state: any) => state.reduxSnippet);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadSnippets());
  }, []);

  return (
    <>
      <div id="mainbar">
        <div className="grid">
          <h1 className={'grid-cell fl1'}>Snippets</h1>
        </div>
        {reduxSnippet.length === 0 ? (
          <NoContent />
        ) : (
          <ListSnippets snippets={reduxSnippet} />
        )}
      </div>
      <div id="sidebar">
        <AsideReadingTips />
      </div>
    </>
  );
}
