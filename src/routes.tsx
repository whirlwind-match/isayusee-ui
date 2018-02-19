import * as React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './home/Home';
import Callback from './Loading';
import Auth from './auth/Auth';
import history from './history';
import {RouteComponentProps} from 'react-router';

const auth = new Auth();

const handleAuthentication = (props: RouteComponentProps<void>) => {
  if (/access_token|id_token|error/.test(props.location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props: RouteComponentProps<void>) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props: RouteComponentProps<void>) => <Home auth={auth} {...props} />} />
          <Route
              path="/callback"
              render={(props: RouteComponentProps<void>) => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
          />
        </div>
      </Router>
  );
};
