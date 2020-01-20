import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import store from './store/store';
import { setConfig } from 'bi-core/config/actions';
import sanitizeEnvVars from 'bi-core/utils/sanitizeEnvVars';
import { LoadableProps } from './common/NetworkSlow';
import AppLayout from './app/layout';
import WebBootstrap from './app/WebBootstrap';
import config from './config';
import appRoutes from './app/routes';

store.dispatch(setConfig({ ...sanitizeEnvVars(config) }));

export const routes = appRoutes();

const Dashboard = Loadable({
  loader: () => import('./dashboard'),
  ...LoadableProps,
});

const Login = Loadable({
  loader: () => import('./login'),
  ...LoadableProps,
});

const Candidates = Loadable({
  loader: () => import('./candidates'),
  ...LoadableProps,
});

class App extends React.Component {
  render = () => {
    return (
      <Provider store={store}>
        <WebBootstrap>
          <Router>
            <AppLayout>
              <Switch>
                <Route exact {...routes.dashboard} component={Dashboard} />
                <Route {...routes.login} component={Login} />
                <Route {...routes.candidates} component={Candidates} />
              </Switch>
            </AppLayout>
          </Router>
        </WebBootstrap>
      </Provider>
    );
  };
}

export default App;
