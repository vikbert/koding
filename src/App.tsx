import React from 'react';
import {Route, Switch} from 'wouter';
import Good from './pages/Good';
import Rule from './pages/Rule';
import Insert from './pages/insert/Insert';
import Navigation from './pages/Navigation';
import Play from './pages/Play';
import 'native-toast/dist/native-toast.css';
import './assets/css/app.css';

const App = () => {
  return (
    <>
      <main>
        <Switch>
          <Route path={'/'} component={Rule}/>
          <Route path={'/play'} component={Play}/>
          <Route path={'/insert'} component={Insert}/>
          <Route path={'/favorite'} component={Good}/>
        </Switch>
      </main>
      <footer>
        <Navigation/>
      </footer>
    </>
  );
};

export default App;
