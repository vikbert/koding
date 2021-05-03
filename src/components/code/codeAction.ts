export const SNIPPET_ADDED = 'code.snippet_added';
export const SNIPPETS_RECEIVED = 'code.snippets_received';

export const fetchSnippetsDone = (snippets: any) => {
  return {
    type: SNIPPETS_RECEIVED,
    snippets,
  };
};

export const addSnippetDone = (snippet: string) => ({
  type: SNIPPET_ADDED,
  snippet,
});
