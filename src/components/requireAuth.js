import React, {Component} from 'react';
import {connect} from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidUpdate() {
      this.navigateAway();
    }

    navigateAway = () => {
      if (!this.props.isSignedIn) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn});

  return connect(mapStateToProps)(ComposedComponent);
};
