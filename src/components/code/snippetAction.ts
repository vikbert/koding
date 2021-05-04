export const SNIPPET_ADDED = 'snippet.snippet_added';
export const SNIPPETS_RECEIVED = 'snippet.snippets_received';

export const fetchSnippetsDone = (snippets: any) => {
  return {
    type: SNIPPETS_RECEIVED,
    snippets,
  };
};

export const addSnippetDone = () => ({
  type: SNIPPET_ADDED,
});
