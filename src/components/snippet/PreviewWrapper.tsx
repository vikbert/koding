import React from 'react'
import SnippetPreview from './SnippetPreview'
import useSnippetResolver from '../../hooks/useSnippetResolver'

type PropsType = {
  snippetId: string
}

export default function PreviewWrapper({snippetId}: PropsType) {
  const {bad, good} = useSnippetResolver(snippetId)

  if (!bad || !good) {
    return null
  }

  // @ts-ignore
  return (
    <>
      <SnippetPreview snippet={bad} autoHeight={true} />
      <SnippetPreview snippet={good} autoHeight={true} />
    </>
  )
}
