import React from 'react';
import Layout from '../Layout';
import {useSelector, useDispatch} from 'react-redux';
import {loadSnippets} from '../../components/snippet/snippetAction';
import ListSnippets from '../../components/snippet/ListSnippets';

export default function PageSnippets(): null | JSX.Element {
  const reduxSnippet = useSelector((state: any) => state.reduxSnippet);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadSnippets());
  }, []);

  if (reduxSnippet.length === 0) {
    return null;
  }

  return (
    <Layout>
      <div id="content" className="snippet-hidden list-snippets">
        <div id="mainbar">
          <ListSnippets snippets={reduxSnippet} />
        </div>
      </div>
    </Layout>
  );
}
