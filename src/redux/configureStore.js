import {compose, createStore} from 'redux';
import rootReducer, {rootState} from './storeReducer';

export default function configureStore() {
    let composerEnhancers = () => null;
    if (process.env.NODE_ENV === 'development') {
        composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    const store = createStore(rootReducer, rootState, composerEnhancers());

    // sagaMiddleware.run(codeSage);

    return store;
}
