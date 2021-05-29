export const SNIPPED_ID_UPDATED = 'editor.snippet_id_updated'

export const updateSnippetId = (snippetId: string) => ({
  type: SNIPPED_ID_UPDATED,
  snippetId,
})
