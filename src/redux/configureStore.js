import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer, {rootState} from './storeReducer';
import thunk from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './middleware/monitorReducer';

export default function configureStore() {
  const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunk);
  const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

  return createStore(rootReducer, rootState, composedEnhancers);
}
