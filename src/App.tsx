import React from 'react';
import {Route, Switch} from 'wouter';
import Good from "./pages/Good";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Navigation from "./pages/Navigation";
import Play from "./pages/Play";
import './assets/css/app.css'

const App = () => {
  return (
      <>
        <main>
          <Switch>
            <Route path={'/'} component={Home}/>
            <Route path={'/play'} component={Play}/>
            <Route path={'/insert'} component={Insert}/>
            <Route path={'/good'} component={Good}/>
          </Switch>
        </main>
        <footer>
          <Navigation/>
        </footer>
      </>
  );
};

export default App;
