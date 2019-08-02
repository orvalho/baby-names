import '../scss/App.scss';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import NameList from './NameList';
import NameBox from './NameBox';
import Profile from './Profile';

export default() => {
  return (<div className="app">
    <BrowserRouter>
      <Route path="/" component={Header}/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/names/girls" component={NameList}/>
      <Route path="/names/boys" component={NameList}/>
      <Route path="/names/new" component={NameBox}/>
      <Route path="/profile" component={Profile}/>
    </BrowserRouter>
  </div>);
};
