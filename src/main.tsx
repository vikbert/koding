import React from 'react'
import ReactDOM from 'react-dom'
import {Provider as ReduxProvider} from 'react-redux';
import App from "./App";
import './main.css'

// @ts-ignore
import configureStore from './redux/configureStore';

ReactDOM.render(
    <ReduxProvider store={configureStore()}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </ReduxProvider>
  ,
    document.getElementById('root')
)
