import '../scss/NameBox.scss';

import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import requireAuth from './requireAuth';
import addName from '../actions/addName';

class SimpleForm extends Component {
  capitalize = (value, previousValue) => !previousValue
    ? value.toUpperCase()
    : value;

  renderError = ({meta}) => meta.touched && meta.error
    ? (<div className="ui error message">
      <div className="header">{meta.error}</div>
    </div>)
    : false;

  onSubmit = formValues => {
    this.props.addName(formValues);
    this.props.history.push(
      `/names/${formValues.sex === 'male'
      ? 'boys'
      : 'girls'}`);
  };

  render() {
    return (<div className="name-box">
      <h1>add a new name</h1>
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="field">
          <Field name="name" component="input" placeholder="Enter a name" autoComplete="off" normalize={this.capitalize}/>
        </div>
        <Field name="name" component={this.renderError}/>
        <div className="inline fields">
          <div className="field">
            <label><Field name="sex" component="input" type="radio" value="male"/>
              <span>Male</span>
            </label>
          </div>
          <div className="field">
            <label><Field name="sex" component="input" type="radio" value="female"/>
              <span>Female</span>
            </label>
          </div>
        </div>
        <Field name="sex" component={this.renderError}/>
        <div>
          <button className="ui button" type="submit">Submit</button>
        </div>
      </form>
    </div>);
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = 'Required!';
  }
  if (!formValues.sex) {
    errors.sex = 'Required!';
  }
  return errors;
};

const requireAuthWrapped = requireAuth(SimpleForm);
const reduxFormWrapped = reduxForm({form: 'nameBox', validate})(requireAuthWrapped);

export default connect(null, {addName})(reduxFormWrapped);
