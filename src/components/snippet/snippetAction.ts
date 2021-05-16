import type {Snippet} from '../../types/Snippet';
import LocalStorageClient from '../../services/LocalStorageClient';

export const SNIPPET_ADDED = 'snippet.snippet_added';
export const SNIPPET_UPDATED = 'snippet.snippet_updated';
export const SNIPPETS_LOADED = 'snippet.snippets_loaded';

export const loadSnippetsDone = (snippets: any) => {
  return {
    type: SNIPPETS_LOADED,
    snippets,
  };
};

export const loadSnippets = () => {
  const client = new LocalStorageClient();
  const snippets = client.listSnippets();

  return loadSnippetsDone(snippets);
};

export const snippetAdded = (snippet: Snippet) => ({
  type: SNIPPET_ADDED,
  snippet,
});

export const addSnippet = (snippet: Snippet) => {
  const client = new LocalStorageClient();
  client.insertSnippet(snippet);

  return snippetAdded(snippet);
};

export const snippetUpdated = (snippet: Snippet) => ({
  type: SNIPPET_UPDATED,
  snippet,
});

export const updateSnippet = (snippet: Snippet) => {
  const client = new LocalStorageClient();
  client.updateSnippet(snippet);

  return snippetUpdated(snippet);
};
