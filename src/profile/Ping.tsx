import * as React from 'react';
import {Component} from 'react';
import {AxiosResponse, default as Axios} from 'axios';
import Auth from '../auth/Auth';

interface Props {
    auth: Auth;
    path: string;
}

class Ping extends Component<Props> {
    constructor(props: Props) {
        super(props);
        const {getAccessToken} = this.props.auth;
        const API_URL = 'http://localhost:8080';
        const headers = {'Authorization': `Bearer ${getAccessToken()}`};
        Axios.get(`${API_URL}/${this.props.path}`, {headers})
            .then((response: AxiosResponse) => this.setState({message: response.data.message}))
            .catch(error => this.setState({message: error.message}));
    }

    render() {
        return (
            <div className="container">
                <div className="profile-area">
                    asfd
                </div>
            </div>
        );
    }
}
export default Ping;
