import '../scss/GoogleAuth.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {attemptSignIn, attemptSignOut, changeAuth} from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({clientId: process.env.REACT_APP_CLIENT_ID, scope: 'email'}).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        // initialize isSignedIn state
        this.props.changeAuth(this.auth.isSignedIn.get());
        // listen for changes in the isSignedIn state
        this.auth.isSignedIn.listen(this.props.changeAuth);
      });
    });
  }

  onSignInButtonClick = () => this.props.attemptSignIn();

  onSignOutButtonClick = () => this.props.attemptSignOut();

  renderAuthButton = () => {
    const {isSignedIn} = this.props;
    let button;
    if (isSignedIn === null) {
      button = null;
    } else if (isSignedIn) {
      button = (<button className="ui button" onClick={this.onSignOutButtonClick}>
        <i className="google icon"></i>
        Sign Out
      </button>);
    } else {
      button = (<button className="ui button" onClick={this.onSignInButtonClick}>
        <i className="google icon"></i>
        Sign In
      </button>);
    }
    return button;
  }

  render() {
    return <div className="google-auth">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn});

export default connect(mapStateToProps, {attemptSignIn, attemptSignOut, changeAuth})(GoogleAuth);
