import {Snippet} from '../types/Snippet';
import useFirebase from '../hooks/useFirebase';

export const insertSnippet = async (snippet: Snippet) => {
  const db = useFirebase();
  const ref = db.ref('APP_SNIPPETS');

  return await ref.add({...snippet});
};
