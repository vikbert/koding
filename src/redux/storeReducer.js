import {combineReducers} from 'redux';
import {snippetReducer, codeState} from '../components/code/snippetReducer';
import {editorReducer, editorState} from '../components/editor/editorReducer';

const allReducers = combineReducers({
    reduxSnippet: snippetReducer,
    reduxEditor: editorReducer,
});

export const rootState = {
    reduxSnippet: codeState,
    reduxEditor: editorState,
};

export default function rootReducer(state, action) {
    return allReducers(state, action);
}
