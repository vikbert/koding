import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import 'native-toast/dist/native-toast.css';
import PageInsert from './pages/insert/PageInsert';
import PageTags from './pages/tags/PageTags';
import PageUsers from './pages/user/PageUsers';
import PageRuleDetail from './pages/rule-detail/PageRuleDetail';
import NotFound from './components/error/NotFound';
import PageTagDetail from './pages/tags/PageTagDetail';
import Layout from './pages/Layout';
import PageTopRules from './pages/rules/PageTopRules';
import PageTeams from './pages/team/PageTeams';
import PageLanding from './pages/home/PageLanding';
import PageHome from './pages/home/PageHome';
import PageSearch from './pages/rules/PageSearch';
import TeamInsertForm from './pages/team/TeamInsertForm';

// @ts-ignore
function RouteWrapper({component: Component, layout: Layout, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props: any) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageLanding} />
          <RouteWrapper
            exact
            path="/convention/newest"
            component={PageHome}
            layout={Layout}
          />
          <RouteWrapper
            exact
            path="/conventions/top"
            component={PageTopRules}
            layout={Layout}
          />
          <RouteWrapper
            exact
            path="/search/:keyword"
            component={PageSearch}
            layout={Layout}
          />
          <RouteWrapper
            path="/convention/:documentId"
            component={PageRuleDetail}
            layout={Layout}
          />
          <RouteWrapper
            exact
            path="/conventions/insert"
            component={PageInsert}
            layout={Layout}
          />
          <RouteWrapper
            exact
            path="/tags"
            component={PageTags}
            layout={Layout}
          />
          <RouteWrapper
            exact
            path="/tag/:name"
            component={PageTagDetail}
            layout={Layout}
          />
          <RouteWrapper
            exact
            path="/users"
            component={PageUsers}
            layout={Layout}
          />
          <RouteWrapper
            exact
            path="/teams"
            component={PageTeams}
            layout={Layout}
          />
          <RouteWrapper
            exact
            path="/teams/insert"
            component={TeamInsertForm}
            layout={Layout}
          />
          <RouteWrapper
            exact
            path="/404"
            component={NotFound}
            layout={Layout}
          />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
