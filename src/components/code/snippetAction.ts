import type {Snippet} from '../../types/Snippet';
import LocalStorageClient from '../../services/LocalStorageClient';

export const SNIPPET_ADDED = 'snippet.snippet_added';
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
}

export const addSnippetDone = (snippet: Snippet) => ({
  type: SNIPPET_ADDED,
  snippet,
});

export const addSnippet = (snippet: Snippet) => {
  const client = new LocalStorageClient();
  client.insertSnippet(snippet);

  return addSnippetDone(snippet);
};
