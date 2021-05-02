export const FETCH_SNIPPETS = 'code.fetch_snippets';
export const SNIPPETS_RECEIVED = 'code.snippets_received';

export const fetchSnippetsDone = (snippets: any) => {
  return {
    type: SNIPPETS_RECEIVED,
    snippets,
  };
};

export const fetchSnippets = () => ({
  type: FETCH_SNIPPETS,
});
