import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {Route} from 'wouter';
import './app.css';
import './utilities.css';
import Good from "./pages/Good";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Navigation from "./pages/Navigation";
import Play from "./pages/Play";

// @ts-ignore
import configureStore from './redux/configureStore';
const store = configureStore();

const App = () => {
  return (
      <>
        <ReduxProvider store={store}>
          <div className="main">
            <Route path={'/'}>
              <Home/>
            </Route>
            <Route path={'/play'}>
              <Play/>
            </Route>
            <Route path={'/insert'}>
              <Insert/>
            </Route>
            <Route path={'/good'}>
              <Good/>
            </Route>
            <Navigation/>
          </div>
        </ReduxProvider>
      </>
  );
};

export default App;
