import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Play from './pages/Play';
import 'native-toast/dist/native-toast.css';
import HomeFlow from './pages/HomeFlow';
import InsertRule from './components/Rule/InsertRule';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeFlow />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/insert">
            <InsertRule />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
