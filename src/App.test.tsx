import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Auth from './auth/Auth';
import {History} from 'history';
import createMemoryHistory from 'history/createMemoryHistory';

it('renders without crashing', () => {
    const div = document.createElement('div');
    // noinspection TsLint
    const auth: Auth = new Auth();
    const  hist: History = createMemoryHistory();
    const app = (<App auth={auth} history={hist}/>);
    ReactDOM.render(app, div);
});
