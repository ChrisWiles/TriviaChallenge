import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import CircularProgress from './components/CircularProgress';
import Layout from './components/Layout/Layout';
import PageNotFound from './components/PageNotFound';
import Route from './components/Route';

/**
 * Route-based code-splitting
 * A component created using React.lazy() only gets loaded when it needs to be rendered.
 * https://reactjs.org/docs/code-splitting.html
 */
const Home = React.lazy(() => import('./screens/Home'));
const Quiz = React.lazy(() => import('./screens/Quiz'));
const Result = React.lazy(() => import('./screens/Result'));
const Categories = React.lazy(() => import('./screens/Categories'));
const History = React.lazy(() => import('./screens/History'));

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Router>
        <Layout>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/" title="Home">
              <Home />
            </Route>
            <Route exact path="/home" title="Home">
              <Home />
            </Route>
            <Route path="/quiz" title="Quiz">
              <Quiz />
            </Route>
            <Route path="/result" title="Result">
              <Result />
            </Route>
            <Route path="/categories" title="Categories">
              <Categories />
            </Route>
            <Route path="/history" title="History">
              <History />
            </Route>
            <Route exact path="/404" title="Page Not Found">
              <PageNotFound />
            </Route>
            <Route path="/*" title="Page Not Found">
              <PageNotFound />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
