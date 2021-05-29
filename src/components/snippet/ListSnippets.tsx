import React from 'react'
import {Snippet} from '../../types/Snippet'
import FilterSnippet from '../filter/FilterSnippet'
import SnippetPreview from './SnippetPreview'
import {useSelector} from 'react-redux'

type PropsT = {
  snippets: Snippet[],
}

export default function ListSnippets(props: PropsT): JSX.Element {
  const reduxSnippet = useSelector((state: any) => state.reduxSnippet)
  const [filter, setFilter] = React.useState('all')

  function filterItems(): any[] {
    if (filter === 'all') {
      return reduxSnippet
    }

    return reduxSnippet.filter((item: Snippet) => {
      return filter === 'bad' ? item.isBad : !item.isBad
    })
  }

  return (
    <>
      <FilterSnippet updateFilter={(filter: string) => setFilter(filter)} />
      <div className="grid">
        <div className="grid-cell grid--cell12">
          {filterItems().map((item: Snippet) => (
            <SnippetPreview snippet={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  )
}
