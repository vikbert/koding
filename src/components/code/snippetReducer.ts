import {SNIPPETS_RECEIVED, SNIPPET_ADDED} from './snippetAction';

export const codeState = []

export const snippetReducer = (state = codeState, action: any) => {
  if (action.type === SNIPPETS_RECEIVED) {
    return action.snippets;
  } else if(action.type === SNIPPET_ADDED) {
    return [action.snippet, ...state];
  }

  return state;
}
