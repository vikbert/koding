import React from 'react';
import {Route, Switch} from 'wouter';
import Good from "./pages/Good";
import Rule from "./pages/Rule";
import Home from "./pages/Home";
import Insert from "./pages/insert/Insert";
import Navigation from "./pages/Navigation";
import Play from "./pages/Play";
import 'native-toast/dist/native-toast.css'

const App = () => {
  return (
      <>
        <main>
          <Switch>
            <Route path={'/rules'} component={Rule}/>
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
