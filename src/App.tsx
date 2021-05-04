import React from 'react';
import {Route, Switch} from 'wouter';
import Good from "./pages/Good";
import Bad from "./pages/Bad";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Navigation from "./pages/Navigation";
import Play from "./pages/Play";
import './assets/css/page.css'

const App = () => {
  return (
      <>
        <main>
          <Switch>
            <Route path={'/'} component={Home}/>
            <Route path={'/play'} component={Play}/>
            <Route path={'/insert'} component={Insert}/>
            <Route path={'/favorite'} component={Good}/>
            <Route path={'/bad'} component={Bad}/>
          </Switch>
        </main>
        <footer>
          <Navigation/>
        </footer>
      </>
  );
};

export default App;
