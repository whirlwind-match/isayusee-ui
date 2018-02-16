import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {History} from 'history';
import createMemoryHistory from 'history/createMemoryHistory';
import Auth from './auth/Auth';

// TODO: needs router etc
const auth: Auth = new Auth();
const  hist: History = createMemoryHistory();
const app = (<App auth={auth} history={hist}/>);
ReactDOM.render(
    app,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
