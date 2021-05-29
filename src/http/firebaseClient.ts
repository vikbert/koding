import {Snippet} from '../types/Snippet'
import useFireStore from '../hooks/useFireStore'

export const insertSnippet = async (snippet: Snippet) => {
  const db = useFireStore()
  const ref = db.ref('APP_SNIPPETS')

  return await ref.add({...snippet})
}
