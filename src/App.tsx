import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import 'native-toast/dist/native-toast.css';
import PageInsert from './pages/insert/PageInsert';
import PageHome from './pages/home/PageHome';
import PageSnippets from './pages/snippet/PageSnippets';
import PageTags from './pages/tags/PageTags';
import PageUsers from './pages/user/PageUsers';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route path="/snippets">
            <PageSnippets />
          </Route>
          <Route path="/insert">
            <PageInsert />
          </Route>
          <Route path="/tags">
            <PageTags />
          </Route>
          <Route path="/users">
            <PageUsers />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
