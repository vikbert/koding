import React from 'react';
import {Snippet} from '../../types/Snippet';
import FilterSnippet from '../filter/FilterSnippet';
import SnippetPreview from './SnippetPreview';

type PropsT = {
  snippets: Snippet[];
};

export default function ListSnippets(props: PropsT): JSX.Element {
  const {snippets} = props;
  const [filter, setFilter] = React.useState('all');
  const [items, setItems] = React.useState(snippets);

  function filterItems(): Snippet[] {
    if (filter === 'all') {
      return snippets;
    }

    return snippets.filter((item: Snippet) => {
      return filter === 'bad' ? item.isBad : !item.isBad;
    });
  }

  React.useEffect(() => {
    setItems(filterItems());
  }, [filter]);

  return (
    <>
      <FilterSnippet updateFilter={(filter: string) => setFilter(filter)} />
      <div className="grid">
        <div className="grid-cell grid--cell12">
          {items.map((item: Snippet) => (
            <SnippetPreview snippet={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
