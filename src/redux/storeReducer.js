import {combineReducers} from 'redux';
import {snippetReducer, snippetState} from '../components/code/snippetReducer';
import {editorReducer, editorState} from '../components/editor/editorReducer';
import {ruleReducer, ruleState} from '../components/Rule/ruleReducer';

const allReducers = combineReducers({
    reduxSnippet: snippetReducer,
    reduxEditor: editorReducer,
    reduxRule: ruleReducer,
});

export const rootState = {
    reduxSnippet: snippetState,
    reduxEditor: editorState,
    reduxRule: ruleState,
};

export default function rootReducer(state, action) {
    return allReducers(state, action);
}
