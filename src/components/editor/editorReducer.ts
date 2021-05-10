import {CODE_CHANGED} from './editorAction';

export const editorState = {
  snippetId: '',
}

export const editorReducer = (state = editorState, action: any) => {
  const {snippetId, type} = action;
  if (type === CODE_CHANGED) {
    return {...state, snippetId};
  }

  return state;
}
