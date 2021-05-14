import React from 'react';
import classNames from 'classnames';

type PropsT = {
  filterBy: (filter: string) => void;
};

export default function FilterSnippet(props: PropsT): JSX.Element {
  const {filterBy} = props;
  const [filter, setFilter] = React.useState<string>('all');

  // @ts-ignore
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  React.useEffect(() => {
    filterBy(filter);
  }, [filter]);

  return (
    <>
      <div className="grid">
        <div className="grid--cell">
          <h1>{`${capitalizeFirstLetter(filter)} snippets`}</h1>
        </div>
        <div className="grid--cell ml-auto mb12 grid s-btn-group js-filter-btn">
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
            className={classNames(
              'grid--cell s-btn s-btn__muted s-btn__outlined',
              {
                'is-selected': filter === 'bad',
              },
            )}
            title="Bad snippets"
            onClick={() => setFilter('bad')}
          >
            Bad
          </button>
          <button
            className={classNames(
              'grid--cell s-btn s-btn__muted s-btn__outlined',
              {
                'is-selected': filter === 'good',
              },
            )}
            title="Good Snippets"
            onClick={() => setFilter('good')}
          >
            Good
          </button>
        </div>
      </div>
    </>
  );
}
