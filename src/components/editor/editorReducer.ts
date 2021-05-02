import {CODE_CHANGED} from './editorAction';

export const editorState = {
  content: '',
}

export const editorReducer = (state = editorState, action: any) => {
  const {content, type} = action;
  if (type === CODE_CHANGED) {
    return {...state, content};
  }

  return state;
}
