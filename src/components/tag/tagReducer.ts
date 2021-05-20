import {TAG_ADDED, TAGS_LOADED} from './tagAction';
import {Tag} from '../../types/Tag';
import LocalStorageClient from '../../services/LocalStorageClient';

export const tagState: any = {};

export const tagReducer = (state = tagState, action: any) => {
  switch (action.type) {
    case TAG_ADDED:
      const tag: Tag = action.tag;
      const keys = Object.keys(state);
      if (!keys.includes(action.tag.name)) {
        state[tag.name] = tag;
      } else {
        // @ts-ignore
        state[tag.name] = [...new Set([...tag.rules, ...state[tag.name]])];

        return state;
      }
      return state;
    case TAGS_LOADED:
      return action.tags;
    default:
      return state;
  }
};
