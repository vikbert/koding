import React, {useState} from 'react';
import Layout from '../Layout';
import IconConstruction from '../../components/icons/IconConstruction';
import {useSelector, useDispatch} from 'react-redux';
import CodePreview from '../../components/code/CodePreview';
import type {Snippet} from '../../types/Snippet';
import FilterSnippet from '../../components/filter/FilterSnippet';
import {loadSnippets} from '../../components/code/snippetAction';

export default function PageSnippets(): JSX.Element {
  const reduxSnippet = useSelector((state: any) => state.reduxSnippet);
  const [items, setItems] = useState(reduxSnippet);
  const dispatch = useDispatch();

  function filterBy(filter: string) {
    setItems(
      reduxSnippet.filter((item: Snippet) => {
        if (filter === 'all') {
          return true;
        }

        return filter === 'bad' ? item.isBad : !item.isBad;
      }),
    );
  }

  React.useEffect(() => {
    dispatch(loadSnippets());
  }, []);
  return (
    <>
      <Layout>
        <div id="content" className="snippet-hidden">
          <div id="mainbar">
            <FilterSnippet filterBy={filterBy} />
            <div className="grid">
              <div className="grid-cell grid--cell12">
                {items.map((item: Snippet) => (
                  <CodePreview
                    code={item.body}
                    isBad={item.isBad}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
