import {SNIPPETS_RECEIVED, SNIPPET_ADDED} from './snippetAction';

export const snippetState = [];

export const snippetReducer = (state = snippetState, action: any) => {
  switch (action.type) {
    case SNIPPETS_RECEIVED:
      return action.snippets;
    case SNIPPET_ADDED:
      return [action.snippet, ...state];
    default:
      return state;
  }
};
