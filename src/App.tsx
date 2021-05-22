import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import 'native-toast/dist/native-toast.css';
import PageInsert from './pages/insert/PageInsert';
import PageHome from './pages/home/PageHome';
import PageSnippets from './pages/snippet/PageSnippets';
import PageTags from './pages/tags/PageTags';
import PageUsers from './pages/user/PageUsers';
import PageRuleDetail from './pages/rule-detail/PageRuleDetail';
import NotFound from './components/error/NotFound';
import PageTagDetail from "./pages/tags/PageTagDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route path="/convention/:id">
            <PageRuleDetail />
          </Route>
          <Route path="/snippets" exact>
            <PageSnippets />
          </Route>
          <Route path="/insert" exact>
            <PageInsert />
          </Route>
          <Route path="/tags" exact>
            <PageTags />
          </Route>
          <Route path="/tag/:name" exact>
            <PageTagDetail />
          </Route>
          <Route path="/users" exact>
            <PageUsers />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
