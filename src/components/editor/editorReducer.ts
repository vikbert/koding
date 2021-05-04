import {CODE_CHANGED} from './editorAction';
import {SNIPPET_ADDED} from "../code/snippetAction";

export const editorState = {
  content: '',
}

export const editorReducer = (state = editorState, action: any) => {
  const {content, type} = action;
  if (type === CODE_CHANGED) {
    return {...state, content};
  } else if (type === SNIPPET_ADDED) {
    window.location.reload();
    return {...state, content: ''};
  }

  return state;
}
