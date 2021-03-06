import * as React from 'react';
import {Component} from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import Auth from './auth/Auth';
import {History} from 'history';

interface Props {
    auth: Auth;
    history: History;
}

class App extends Component<Props> {
  goTo(route: string) {
      (this.props as Props).history.replace(`/${route}`);
  }

  login() {
      (this.props as Props).auth.login();
  }

  logout() {
      (this.props as Props).auth.logout();
  }

    renewToken() {
        this.props.auth.renewToken();
    }

    render() {
        const { isAuthenticated } = (this.props as Props).auth;

        return (
            <div>
                <Navbar fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a onClick={() => this.goTo('home')}>Auth0 - React</a>
                        </Navbar.Brand>
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={() => this.goTo('home')}
                        >
                            Home
                        </Button>
                        {!isAuthenticated() &&
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={() => this.login()}
                        >
                            Log In
                        </Button>}
                        {isAuthenticated() &&
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={() => this.goTo('profile')}
                        >
                            Profile
                        </Button>}
                        {isAuthenticated() &&
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={() => this.renewToken()}
                        >
                            Renew Token
                        </Button>}
                        {isAuthenticated() &&
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={() => this.logout()}
                        >
                            Log Out
                        </Button>}
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}

export default App;
