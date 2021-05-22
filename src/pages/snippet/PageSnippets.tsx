import React from 'react';
import Layout from '../Layout';
import {useSelector, useDispatch} from 'react-redux';
import {loadSnippets} from '../../components/snippet/snippetAction';
import ListSnippets from '../../components/snippet/ListSnippets';
import AsideReadingTips from '../../components/aside/AsideReadingTips';
import NoContent from '../../components/error/NoContent';

export default function PageSnippets(): null | JSX.Element {
  const reduxSnippet = useSelector((state: any) => state.reduxSnippet);
  const dispatch = useDispatch();
  console.log(reduxSnippet);

  React.useEffect(() => {
    dispatch(loadSnippets());
  }, []);

  return (
      <Layout>
        <div id="content" className="snippet-hidden list-snippets">
          <div id="mainbar">
            {reduxSnippet.length === 0 ? (
                <NoContent/>
            ) : (
                <ListSnippets snippets={reduxSnippet}/>
            )}
          </div>
          <div id="sidebar">
            <AsideReadingTips/>
          </div>
        </div>
      </Layout>
  );
}
