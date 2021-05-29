import {combineReducers} from 'redux';
import {
  snippetReducer,
  snippetState,
} from '../components/snippet/snippetReducer';
import {editorReducer, editorState} from '../components/editor/editorReducer';
import {ruleReducer, ruleState} from '../components/Rule/ruleWidget';
import {tagReducer, tagState} from '../components/tag/tagWidget';
import {errorReducer, errorState} from '../components/error/errorWidget';
import {searchReducer, searchState} from '../components/search/searchWidget';

const allReducers = combineReducers({
  reduxSnippet: snippetReducer,
  reduxEditor: editorReducer,
  reduxRule: ruleReducer,
  reduxTag: tagReducer,
  reduxError: errorReducer,
  reduxSearch: searchReducer,
});

export const rootState = {
  reduxSnippet: snippetState,
  reduxEditor: editorState,
  reduxRule: ruleState,
  reduxTag: tagState,
  reduxError: errorState,
  reduxSearch: searchState,
};

export default function rootReducer(state, action) {
  return allReducers(state, action);
}
