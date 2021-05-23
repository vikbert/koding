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
import PageTagDetail from './pages/tags/PageTagDetail';
import Layout from './pages/Layout';

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
          <RouteWrapper exact path="/" component={PageHome} layout={Layout} />
          <RouteWrapper exact path="/snippets" component={PageSnippets} layout={Layout} />
          <RouteWrapper exact path="/insert" component={PageInsert} layout={Layout} />
          <RouteWrapper exact path="/tags" component={PageTags} layout={Layout} />
          <RouteWrapper exact path="/tag:name" component={PageTagDetail} layout={Layout} />
          <RouteWrapper exact path="/users" component={PageUsers} layout={Layout} />
          <RouteWrapper exact path="/404" component={NotFound} layout={Layout} />
          <RouteWrapper path="/convention/:documentId" component={PageRuleDetail} layout={Layout}/>
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
