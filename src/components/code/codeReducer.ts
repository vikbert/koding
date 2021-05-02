import {SNIPPETS_RECEIVED} from './codeAction';

export const codeState = []

export const codeReducer = (state = codeState, action: any) => {
  if (action.type === SNIPPETS_RECEIVED) {
    return action.snippets;
  }

  return state;
}
