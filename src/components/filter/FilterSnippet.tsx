import React from 'react';
import classNames from 'classnames';

type PropsT = {
  filterBy: (filter: string) => void;
};

export default function FilterSnippet(props: PropsT): JSX.Element {
  const {filterBy} = props;
  const [filter, setFilter] = React.useState('all');

  React.useEffect(() => {
    filterBy(filter);
  }, [filter]);

  return (
    <>
      <button
        className={classNames(
          'youarehere grid--cell s-btn s-btn__muted s-btn__outlined',
          {'is-selected': filter === 'all'},
        )}
        title="All snippets"
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={classNames('grid--cell s-btn s-btn__muted s-btn__outlined', {
          'is-selected': filter === 'bad',
        })}
        title="Bad snippets"
        onClick={() => setFilter('bad')}
      >
        Bad
      </button>
      <button
        className={classNames('grid--cell s-btn s-btn__muted s-btn__outlined', {
          'is-selected': filter === 'good',
        })}
        title="Good Snippets"
        onClick={() => setFilter('good')}
      >
        Good
      </button>
    </>
  );
}
