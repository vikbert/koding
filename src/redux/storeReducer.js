import {combineReducers} from 'redux';
import {
  snippetReducer,
  snippetState,
} from '../components/snippet/snippetReducer';
import {editorReducer, editorState} from '../components/editor/editorReducer';
import {ruleReducer, ruleState} from '../components/Rule/ruleWidget';
import {tagReducer, TAG_STATE} from '../components/tag/tagWidget';

const allReducers = combineReducers({
  reduxSnippet: snippetReducer,
  reduxEditor: editorReducer,
  reduxRule: ruleReducer,
  reduxTag: tagReducer,
});

export const rootState = {
  reduxSnippet: snippetState,
  reduxEditor: editorState,
  reduxRule: ruleState,
  reduxTag: TAG_STATE,
};

export default function rootReducer(state, action) {
  return allReducers(state, action);
}
