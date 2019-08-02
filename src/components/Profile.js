import '../scss/Profile.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import requireAuth from './requireAuth';

class Profile extends Component {
  renderProfile = () => {
    const {name, email} = this.props.auth;
    return (<table className="ui definition table">
      <tbody>
        <tr>
          <td>Name</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{email}</td>
        </tr>
      </tbody>
    </table>);
  };

  render() {
    return (<div className="profile">
      <h1>your profile</h1>
      {this.renderProfile()}
    </div>);
  }
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps)(requireAuth(Profile));
