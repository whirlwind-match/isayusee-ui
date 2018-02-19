import { Component } from 'react';
import {Panel, ControlLabel, Glyphicon} from 'react-bootstrap';
import './Profile.css';
import * as React from 'react';
import Auth from '../auth/Auth';

interface Props {
    auth: Auth;
}

interface State {
    profile: {
        name?: string;
        nickname?: string;
        picture?: string;
    };
}

class Profile extends Component<Props, State> {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel>
              <Panel.Heading>Profile</Panel.Heading>
              <Panel.Body>
                <img src={profile.picture} alt="profile" />
                <div>
                  <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
                  <h3>{profile.nickname}</h3>
                </div>
                <pre>{JSON.stringify(profile, null, 2)}</pre>
              </Panel.Body>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
