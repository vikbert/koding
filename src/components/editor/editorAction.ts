export const CODE_CHANGED = 'editor.code_changed';

export const codeChanged = (snippetId: string) => {
  return {
    type: CODE_CHANGED,
    snippetId,
  };
};
