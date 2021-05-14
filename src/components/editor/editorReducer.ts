import {SNIPPED_ID_UPDATED} from './preview/editorAction';

export const editorState = {
  snippetId: '',
};

export const editorReducer = (state = editorState, action: any) => {
  const {snippetId, type} = action;
  if (type === SNIPPED_ID_UPDATED) {
    return {...state, snippetId};
  }

  return state;
};
