import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer, {rootState} from './storeReducer';
import thunk from 'redux-thunk';
import monitorReducerEnhancer from './middleware/monitorReducer';

export default function configureStore() {
  let composedEnhancers = () => {};
  if (process.env.NODE_ENV === 'development') {
    composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  return createStore(
    rootReducer,
    rootState,
    composedEnhancers(applyMiddleware(thunk), monitorReducerEnhancer),
  );
}
