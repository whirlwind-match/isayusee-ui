import * as React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './home/Home';
import Callback from './Loading';
import Auth from './auth/Auth';
import history from './history';
import {Redirect, RouteComponentProps} from 'react-router';
import Profile from './profile/Profile';

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
                <Route
                    path="/profile"
                    render={props =>
                        !auth.isAuthenticated()
                            ? <Redirect to="/home" />
                            : <Profile auth={auth} {...props} />}
                />
            </div>
        </Router>
    );
};