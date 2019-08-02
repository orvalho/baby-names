import '../scss/NameList.scss';

import React from 'react';
import {connect} from 'react-redux';

const NameList = props => {
  const sex = props.match.path.includes('girls')
    ? 'female'
    : 'male';
  const names = props.names.filter(name => name.sex === sex);

  return (<div className="name-list">
    <h1>{
        sex === 'female'
          ? 'girl names'
          : 'boy names'
      }</h1>
    <div className="ui list">{names.map(name => <div key={name.name} className="item">{name.name}</div>)}</div>
  </div>);
};

const mapStateToProps = state => ({names: state.names});

export default connect(mapStateToProps)(NameList);
