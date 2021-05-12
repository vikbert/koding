import type {Snippet} from '../../types/Snippet';
import LocalStorageClient from '../../services/LocalStorageClient';

export const SNIPPET_ADDED = 'snippet.snippet_added';
export const SNIPPETS_RECEIVED = 'snippet.snippets_received';

export const fetchSnippetsDone = (snippets: any) => {
  return {
    type: SNIPPETS_RECEIVED,
    snippets,
  };
};

export const addSnippetDone = (snippet: Snippet) => ({
  type: SNIPPET_ADDED,
  snippet,
});

export const addSnippet = (snippet: Snippet) => {
  const client = new LocalStorageClient();
  client.insertSnippet(snippet);

  return addSnippetDone(snippet);
};
