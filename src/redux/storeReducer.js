import {combineReducers} from 'redux';
import {codeReducer, codeState} from '../components/code/codeReducer';
import {editorReducer, editorState} from '../components/editor/editorReducer';

const allReducers = combineReducers({
    reduxCode: codeReducer,
    reduxEditor: editorReducer,
});

export const rootState = {
    reduxBook: codeState,
    reduxEditor: editorState,
};

export default function rootReducer(state, action) {
    return allReducers(state, action);
}
