import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Play from './pages/Play';
import 'native-toast/dist/native-toast.css';
import LayoutInsert from './pages/LayoutInsert';
import LayoutHome from './pages/LayoutHome';

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
