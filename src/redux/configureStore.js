import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer, {rootState} from './storeReducer';
import thunk from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './middleware/monitorReducer';

export default function configureStore() {
  // let composerEnhancers = () => {};
  // if (process.env.NODE_ENV === 'development') {
  //   composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // }

  const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunk);
  const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

  return createStore(rootReducer, rootState, composedEnhancers);
}
