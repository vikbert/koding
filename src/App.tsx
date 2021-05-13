import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Play from './pages/Play';
import 'native-toast/dist/native-toast.css';
import LayoutHome from './pages/HomeFlow';
import OverflowInsert from './pages/OverflowInsert';
import LayoutInsert from './pages/LayoutInsert';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LayoutHome />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/insert">
            <LayoutInsert />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
