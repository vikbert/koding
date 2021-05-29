import type {Snippet} from '../../types/Snippet'
import SnippetReference from '../../http/SnippetReference'

export const SNIPPET_ADDED = 'snippet.snippet_added'
export const SNIPPET_UPDATED = 'snippet.snippet_updated'
export const SNIPPETS_LOADED = 'snippet.snippets_loaded'

export const loadSnippetsDone = (snippets: any) => {
  return {
    type: SNIPPETS_LOADED,
    snippets,
  }
}

export const loadSnippets = () => {
  return function (dispatch: any) {
    const snippetRef = new SnippetReference()
    return snippetRef.list().then((list) => {
      dispatch(loadSnippetsDone(list.documents))
    })
  }
}

export const snippetAdded = (snippet: Snippet) => ({
  type: SNIPPET_ADDED,
  snippet,
})

export const addSnippet = (snippet: Snippet) => {
  return function (dispatch: any) {
    const snippetRef = new SnippetReference()

    return snippetRef.add(snippet).then((ref) => {
      const withDocumentPath = {...snippet, ...{path: ref.path}}
      dispatch(snippetAdded(withDocumentPath))
    })
  }
}

export const snippetUpdated = (snippet: Snippet) => ({
  type: SNIPPET_UPDATED,
  snippet,
})

export const updateSnippet = (snippet: Snippet) => {
  return function (dispatch: any) {
    if (!snippet.path) {
      throw new Error('Snippet has no path defined!')
    }

    const snippetRef = new SnippetReference(snippet.path)

    return snippetRef.update(snippet.body).then((ref) => {
      dispatch(snippetUpdated(snippet))
    })
  }
}
