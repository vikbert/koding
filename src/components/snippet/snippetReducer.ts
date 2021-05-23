import {SNIPPETS_LOADED, SNIPPET_ADDED, SNIPPET_UPDATED} from './snippetAction';
import {Snippet} from '../../types/Snippet';
import {FirebaseDocument} from 'firebase-firestore-lite/dist/Document';

export const snippetState = [];

export const snippetReducer = (state = snippetState, action: any) => {
  switch (action.type) {
    case SNIPPETS_LOADED:
      return action.snippets.map((item: FirebaseDocument) => {
        // @ts-ignore
        const {__meta__: {path},} = item;
        return {...item, path};
      });
    case SNIPPET_UPDATED:
      return state.map((item: Snippet) => {
        return item.id === action.snippet.id ? action.snippet : item;
      });
    case SNIPPET_ADDED:
      return [action.snippet, ...state];
    default:
      return state;
  }
};
