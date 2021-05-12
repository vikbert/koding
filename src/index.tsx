import React from 'react'
import ReactDOM from 'react-dom'
import {Provider as ReduxProvider} from 'react-redux';
import App from "./App";
import './assets/css/index.css'

// @ts-ignore
import configureStore from './redux/configureStore';
const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </ReduxProvider>
  ,
    document.getElementById('root')
)
