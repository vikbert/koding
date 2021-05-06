import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer, {rootState} from './storeReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
    let composerEnhancers = () => {};
    if (process.env.NODE_ENV === 'development') {
        composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    return createStore(rootReducer, rootState, composerEnhancers(applyMiddleware(thunk)));
}
