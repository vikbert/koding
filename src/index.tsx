import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux';
import './assets/css/index.css';
import './assets/css/app.css';

// @ts-ignore
import configureStore from './redux/configureStore';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.body,
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
