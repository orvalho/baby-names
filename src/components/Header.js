import '../scss/Header.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

class Header extends Component {
  getClassName = path => {
    let result = 'item';
    if (this.props.location.pathname === path) {
      result += ' active';
    }
    if (!this.props.isSignedIn && (path === "/names/new" || path === "/profile")) {
      result += ' grayed-out';
    }
    return result;
  };

  render() {
    return (<div className="header ui secondary menu">
      <Link className={this.getClassName("/")} to="/">Home</Link>
      <Link className={this.getClassName("/names/girls")} to="/names/girls">Girl names</Link>
      <Link className={this.getClassName("/names/boys")} to="/names/boys">Boy names</Link>
      <Link className={this.getClassName("/names/new")} to="/names/new">Post a name</Link>
      <Link className={this.getClassName("/profile")} to="/profile">Your profile</Link>
      <div className="item"><GoogleAuth/></div>
    </div>);
  }
}

const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn});

export default connect(mapStateToProps)(Header);
