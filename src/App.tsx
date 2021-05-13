import React from 'react';
import {Route, Switch} from 'wouter';
import Good from './pages/Good';
import Insert from './pages/insert/Insert';
import Play from './pages/Play';
import 'native-toast/dist/native-toast.css';
import Navigation from './pages/Navigation';
import HomeFlow from './pages/HomeFlow';

const App = () => {
  return (
    <>
      <Switch>
        <Route path={'/'} component={HomeFlow} />
        <Route path={'/play'} component={Play} />
        <Route path={'/insert'} component={Insert} />
        <Route path={'/favorite'} component={Good} />
      </Switch>
    </>
  );
};

export default App;
