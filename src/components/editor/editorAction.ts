export const CODE_CHANGED = 'editor.code_changed';

export const codeChanged = (codeContent: string) => {
  return {
    type: CODE_CHANGED,
    content: codeContent,
  };
};
